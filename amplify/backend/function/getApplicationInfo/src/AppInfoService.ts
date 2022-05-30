import { DynamoDB } from 'aws-sdk';
import { species, IAnimalFull } from '../../common/IAnimal';

export interface IEvent {
  date: Date,
  time: string,
  location: string,
  title: string,
  locationLink: string,
  includeInDogApp: boolean,
  includeInCatApp: boolean,
  notes?: string;
}

export class ApplicationInfoService {
  constructor(private dynamodb: DynamoDB.DocumentClient, private availableTableName: string, private sheetsTableName: string) { }

  public async getAnimals(species: species): Promise<string[]> {
    const availableAttributesToGet: Array<keyof IAnimalFull> = [
      'name',
      'species'
    ];
    const scanParams: AWS.DynamoDB.ScanInput = {
      TableName: this.availableTableName,
      AttributesToGet: availableAttributesToGet
    }
    return this.dynamodb.scan(scanParams).promise()
      .then((data: AWS.DynamoDB.ScanOutput) => data.Items as unknown as { name: string, species: species }[])
      .then(availableAnimals => availableAnimals.filter(a => a.species === species))
      .then(filteredAnimals => filteredAnimals.map(a => a.name))
      .then(animalNames => animalNames.sort()); // assuming all names are going to be capitalized
  }

  public async getUpcomingEligibleEvents(species: species): Promise<IEvent[]> {
    const partitionKeyName = "name";
    const getEventsParams = {};
    getEventsParams[partitionKeyName] = 'events';

    const getItemParams: AWS.DynamoDB.GetItemInput = {
      TableName: this.sheetsTableName,
      Key: getEventsParams
    }
    return this.dynamodb.get(getItemParams).promise()
      .then((data) => data.Item)
      .then(eventsSheet => {
        const events: IEvent[] = eventsSheet.data.map(e => {
          return {
            date: new Date(e[0]),
            time: e[1],
            location: e[2],
            title: e[3],
            includeInDogApp: !!e[5],
            includeInCatApp: !!e[6],
            notes: e[7]
          };
        });

        const upcomingEligibleEvents: IEvent[] = events
          .filter(e => ApplicationInfoService.isUpcoming(e))
          .filter(e => ApplicationInfoService.shouldBeIncludedInApplicationInfo(e, species));
        // now sorted ascending
        upcomingEligibleEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
        return upcomingEligibleEvents;
      })
  }

  public static getUpcomingEventMessage(event: IEvent): string {
    // "Saturday, April 2, 2022"
    const nextDate = event.date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const startTime: string = event.time.trim().substring(0, event.time.indexOf(' ')); // will be '' if no space is found
    return `Our next adoption date is ${nextDate}. If you are contacted by our interview team and your application is approved, will you be able to be at the ${event.title} event${startTime ? ` at ${startTime}` : ''}?`;
  }

  private static shouldBeIncludedInApplicationInfo(event: IEvent, species: species) {
    switch (species) {
      case 'Cat':
        return event.includeInCatApp;
      case 'Dog':
        return event.includeInDogApp;
      default:
        return false;
    }
  }

  private static isUpcoming(event: IEvent): boolean {
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    return event.date.getTime() - new Date().getTime() > -millisecondsInOneDay;
  }
}