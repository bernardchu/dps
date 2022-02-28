import { Animal } from "./Animal";
import { RescueGroupsV2ResponseToAnimalConverter } from "./RescueGroupsV2ResponseToAnimalConverter";
import _ = require('lodash');
import nodeFetch from 'node-fetch';
const xml2jsConverter = require('xml-js');

interface IAnimalVideoData {
  [key: string]: string; // animal ID : video url
}

interface IRescueGroupsXmlData { _cdata: string }

interface IConvertedPetXml {
  animalID: IRescueGroupsXmlData;
  videoUrl1?: IRescueGroupsXmlData;
}


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
  private readonly RESCUE_GROUPS_API_BASE_URI = 'https://api.rescuegroups.org/rest/';

  /**
   * Fetches and processes almost all of the animal data except videos, which aren't included here.
   */
  public async fetchPetDataFromRescueGroups(rescueGroupsKey: string): Promise<Animal[]> {
    const rescuegroupsUrl = new URL(this.RESCUE_GROUPS_BASE_URI);
    rescuegroupsUrl.searchParams.append('key', rescueGroupsKey);
    const response = await nodeFetch(rescuegroupsUrl.toString());
    const raw = await response.text();
    return RescueGroupsV2ResponseToAnimalConverter.parse(raw);
  }

  /**
   * Fetches animal data from the rescue groups API and extracts video link info.
   * Example (abbreviated) XML response:
   * 
    <pets>
      <pet>
      <animalID>
        <![CDATA[ 17098517 ]]>
      </animalID>
      <name>
        <![CDATA[ Outlaw ]]>
      </name>
      <videoUrl1>
        <![CDATA[ https://www.youtube.com/v/fufcrfHn13U ]]>
      </videoUrl1>
      </pet>
      <pet>
        ...
      </pet>
    </pets>
   */
  public async fetchPetVideoDataFromRescueGroups(rescueGroupsApiKey: string): Promise<IAnimalVideoData> {
    // Make request
    const apiUrl = new URL(this.RESCUE_GROUPS_API_BASE_URI);
    apiUrl.searchParams.append('key', rescueGroupsApiKey);
    apiUrl.searchParams.append('limit', '100');
    apiUrl.searchParams.append('type', 'animals');
    const response = await nodeFetch(apiUrl.toString());
    const raw = await response.text();

    // Build animalID: videoUrl dictionary
    const petJSON = xml2jsConverter.xml2json(raw, { compact: true });
    const petData = JSON.parse(petJSON);
    const pets: IConvertedPetXml[] = petData.pets.pet;
    return pets.reduce((videoData, pet) => {
      videoData[pet.animalID._cdata] = pet.videoUrl1._cdata;
      return videoData;
    }, {})
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