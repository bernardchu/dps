import { sheets_v4 } from 'googleapis';
import { GoogleAuth } from 'googleapis-common';
import _ = require('lodash');
import { IDBSuccessStory, ISuccessStory } from '../../common/ISuccessStory';
import { SheetDataProcessor } from './SheetDataProcessor';

/**
 * Really ought to be abstracted out into shared code with AvailableSyncer but that would require lambda layers
 */
export default class SuccessStoriesSyncer {
  constructor(private tableName: string, private dynamoDB: AWS.DynamoDB.DocumentClient, private batchLimit: number) { }

  /**
   * @returns SS currently in the available dynamoDB table
   */
  public async getDbSuccessStories(): Promise<string[]> {
    const scanParams: AWS.DynamoDB.ScanInput = {
      TableName: this.tableName,
      AttributesToGet: ['id']
    }

    return this.dynamoDB.scan(scanParams).promise()
      .then((data: AWS.DynamoDB.ScanOutput) => data.Items.map(i => i.id))
      .catch(err => {
        console.error(err);
        return err;
      });
  }

  /**
   * Deletes SS from table
   * @param ids: ids of SS to be removed from table
   */
  public async deleteFromTable(ids: string[]): Promise<any> {
    if (!ids.length) { return }
    const batches = _.chunk(ids, this.batchLimit);
    const requests: AWS.DynamoDB.BatchWriteItemInput[] = batches.map(batch => {
      const RequestItems = {};
      RequestItems[this.tableName] = batch.map(id => {
        return {
          DeleteRequest: {
            Key: { id }
          }
        }
      });
      return { RequestItems };
    })
    return Promise.all(requests.map(r => this.dynamoDB.batchWrite(r).promise()))
      .catch(err => console.error(err));
  }

  /**
   * Get success stories from the google sheet.
   * @param credentials for the service account used to access the sheet
   * @param gapiClient from Google API lib
   * @param spreadSheetId ID of Google Sheets workbook
   * @returns Success stories organized in the form that they should be saved in
   */
  public getSuccessStoriesFromSheet(credentials, gapiClient: GoogleAuth<any>, spreadSheetId: string): Promise<IDBSuccessStory[]> {
    return new sheets_v4.Sheets({ auth: gapiClient }).spreadsheets.get({
      spreadsheetId: spreadSheetId,
      ranges: ['success!A:I'],
      includeGridData: true
    })
      .then((sheetResponse) => {
        const successStorySheet = sheetResponse.data.sheets[0];
        const gridData: string[][] = SheetDataProcessor.simplify(successStorySheet.data[0].rowData)
        const columns = [
          'id',
          'name',
          'date',
          'story',
          'photo1',
          'photo2',
          'photo3',
          'photo4',
          'photo5'
        ];
        // TODO: basically a copy of SheetsMapper; is there a decent way to share code? Can't put into ../../common; maybe lambda layer
        const organized: ISuccessStory[] = gridData.map(row => {
          return columns.reduce((obj, key, index) => {
            obj[key as string] = row[index];
            return obj;
          }, {}) as unknown as ISuccessStory;
        });
        const byId: { [key: string]: ISuccessStory[] } = _.groupBy(organized, ss => ss.id);
        return Object.keys(byId).map(id => {
          return {
            id,
            stories: byId[id]
          };
        });
      });
  }

  /**
   * @param incomingStories to be written to DB
   */
  public writeToDb(incomingStories: IDBSuccessStory[]): Promise<any> {
    const batches = _.chunk(incomingStories, this.batchLimit);
    const requests: AWS.DynamoDB.BatchWriteItemInput[] = batches.map(batch => {
      const RequestItems = {};
      RequestItems[this.tableName] = batch.map(story => {
        return {
          PutRequest: {
            Item: story
          }
        }
      });
      return { RequestItems };
    });
    return Promise.all(requests.map(r => this.dynamoDB.batchWrite(r).promise()));
  }
}