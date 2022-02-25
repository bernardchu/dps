import { Animal } from "./Animal";
import { RescueGroupsV2ResponseToAnimalConverter } from "./RescueGroupsV2ResponseToAnimalConverter";
import _ = require('lodash');
import nodeFetch from 'node-fetch';

export class AvailableSyncer {
  constructor(private tableName: string, private dynamoDB: AWS.DynamoDB.DocumentClient, private batchLimit: number) { }

  /**
   * Empties table to prepare to fill it. We can't just delete the table because DynamoDB takes up to a minute
   * or sometimes even more to fully delete a table and we can't wait that long.
   * @param tableName name of table to empty
   * @param ddb dynamoDB instance
   */
  public async emptyTable(): Promise<any> {
    const scanParams: AWS.DynamoDB.ScanInput = {
      TableName: this.tableName,
      AttributesToGet: ['id']
    }

    this.dynamoDB.scan(scanParams, (err, data: AWS.DynamoDB.ScanOutput) => {
      if (err) {
        console.error(err)
      } else {
        const batches = _.chunk(data.Items, this.batchLimit);
        const requests: AWS.DynamoDB.BatchWriteItemInput[] = batches.map(batch => {
          const RequestItems = {};
          RequestItems[this.tableName] = batch.map(animal => {
            return {
              DeleteRequest: {
                Key: {
                  'id': animal.id
                }
              }
            }
          });
          return { RequestItems };
        })
        return Promise.all(requests.map(r => this.dynamoDB.batchWrite(r).promise()))
          .catch(err => console.error(err));
      }
    });
  }

  private readonly RESCUE_GROUPS_BASE_URI = 'https://toolkit.rescuegroups.org/javascript/v2.0/';

  public async fetchFromRescueGroups(rescueGroupsKey: string): Promise<Animal[]> {
    const rescuegroupsUrl = new URL(this.RESCUE_GROUPS_BASE_URI);
    rescuegroupsUrl.searchParams.append('key', rescueGroupsKey);
    const response = await nodeFetch(rescuegroupsUrl.toString());
    const raw = await response.text();
    return RescueGroupsV2ResponseToAnimalConverter.parse(raw);
  }

  public async writeAnimals(animals: Animal[]): Promise<AWS.DynamoDB.BatchWriteItemOutput[]> {
    const batches: Animal[][] = _.chunk(animals, this.batchLimit);
    const requests = batches.map(batch => {
      const RequestItems = {};
      RequestItems[this.tableName] = batch.map(animal => {
        return {
          PutRequest: {
            Item: animal.serialize()
          }
        }
      });
      return { RequestItems };
    })
    return Promise.all(requests.map(r => this.dynamoDB.batchWrite(r).promise()))
  }
}