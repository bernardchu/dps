import { DynamoDB } from 'aws-sdk';
import { species, IAnimalFull } from '../../common/IAnimal';

export interface IEvent {
  date: Date,
  time: string,
  location: string
}

export class ApplicationInfoService {
  // Awful, copied from DatesHandler. Can't share code across lambdas yet without layers.
  private static readonly stores = {
    'capitol': {
      name: 'San Jose Pet Food Express on Capitol Expressway',
      map_url: 'http://maps.google.com/maps?daddr=1787%20E.%20Capitol%20Expressway,San%20Jose,CA,95121'
    },
    'palo alto': {
      name: 'Palo Alto Pet Food Express',
      map_url: 'https://www.google.com/maps/dir//Pet+Food+Express,+3910+Middlefield+Rd,+Palo+Alto,+CA+94303/@37.4191608,-122.180418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fba6c4de54605:0x2f24f8c213697755!2m2!1d-122.1103434!2d37.4191994'
    },
    'campbell': {
      name: 'Campbell Pet Food Express',
      map_url: 'http://maps.google.com/maps?daddr=1902%20South%20Bascom%20Avenue,Campbell,CA,95008'
    },
    'blossom hill': {
      name: 'San Jose Pet Food Express on Blossom Hill',
      map_url: 'http://maps.google.com/maps?daddr=1152%20Blossom%20Hill%20Road,San%20Jose,CA,95118'
    },
    'redwood city': {
      name: 'Redwood City Pet Food Express @ Woodside Plaza',
      map_url: 'http://maps.google.com/maps?daddr=372%20Woodside%20Plaza,Redwood%20City,CA,94061'
    },
    'saratoga': {
      name: 'Saratoga Pet Food Express',
      map_url: 'https://maps.google.com/maps?daddr=Pet+Food+Express+12900+Saratoga+Sunnyvale+Road+Saratoga+CA+95070'
    },
    'stevens creek': {
      name: 'Stevens Creek Pet Food Express',
      map_url: 'https://www.google.com/maps/preview#!data=!1m4!1m3!1d46206!2d-121.993378!3d37.320762!4m13!3m12!1m0!1m1!1sPet+Food+Express+5148+Stevens+Creek+Boulevard+San+Jose+CA+95129!3m8!1m3!1d50735!2d-122.095873!3d37.36794!3m2!1i1024!2i768!4f13.1&fid=0'
    },
    'pasadena': {
      name: 'Pasadena Pet Food Express',
      map_url: 'https://maps.google.com/maps?q=320+S.+Lake,+Pasadena,+CA+91101&ie=UTF-8&ei=Ce5zUviTNsmzigKpiIHoAw&ved=0CAoQ_AUoAg'
    },
    'adoptathon': {
      name: 'Bay Area Pet Fair',
      map_url: 'http://www.bayareapetfair.org'
    },
    'tbd': {
      name: 'Location TBD',
      map_url: ''
    },
    'ba_expo': {
      name: 'Bay Area Pet Expo (Mega Adoption Area and Booth #409)',
      map_url: 'http://www.bayareapetexpo.com/directions.html'
    },
    'vegas_expo': {
      name: 'Vegas Pet Expo (find us at the Valentine\'s Day Booth)',
      map_url: 'http://www.vegaspetexpo.com/directions.html'
    },
    'eb_adoptathon': {
      name: 'East Bay SPCA Adoptathon',
      map_url: 'http://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Jack+London+Square%2C+Oakland%2C+California&FORM=FBKPL0&name=East+Bay+SPCA+Adoptathon&mkt=en-US'
    },
    'sd_expo': {
      name: 'San Diego Pet Expo, Del Mar Fairgrounds',
      map_url: 'http://petexposandiego.com/'
    },
    'town and country': {
      name: 'Pet-A-Palooza',
      map_url: 'http://www.tandcvillage.com/directions.html'
    },
    'long beach': {
      name: 'Long Beach Pet Food Express',
      map_url: 'https://www.google.com/maps?daddr=Pet+Food+Express++4220+Long+Beach+Blvd.++++++Long+Beach+++CA+++90807'
    },
    'carlsbad': {
      name: 'Carlsbad Pet &amp; Feed',
      map_url: 'https://www.carlsbadpetandfeed.com/'
    },
    'hoover_park': {
      name: 'Palo Alto Hoover Park',
      map_url: 'https://goo.gl/maps/No6vLMBKx594diqw7'
    }
  }

  constructor(private dynamodb: DynamoDB.DocumentClient, private availableTableName: string, private sheetsTableName: string) { }

  public async getAnimals(species: species): Promise<{ name: string, species: species }[]> {
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
      .then(availableAnimals => availableAnimals.filter(a => a.species === species));
  }

  public async getUpcomingSaturdayEvents(): Promise<IEvent[]> {
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
            location: e[2]
          };
        });
        const upcomingSaturdayEvents: IEvent[] = events
          .filter(e => ApplicationInfoService.isUpcoming(e))
          .filter(e => ApplicationInfoService.isSaturday(e));
        // now sorted ascending
        upcomingSaturdayEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
        return upcomingSaturdayEvents;
      })
  }

  public static getUpcomingEventMessage(event: IEvent): string {
    // "Saturday, April 2, 2022"
    const nextDate = event.date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const location = this.stores[event.location].name;
    const startTime: string = event.time.trim().substring(0, event.time.indexOf(' '));
    return `Our next adoption date is ${nextDate}. If you are contacted by our interview team and your application is approved, will you be able to be at the ${location} at ${startTime}?`;
  }

  private static isSaturday(event: IEvent) {
    const saturdayIndex = 6;
    return event.date.getDay() === saturdayIndex;
  }

  private static isUpcoming(event: IEvent): boolean {
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    return event.date.getTime() - new Date().getTime() > -millisecondsInOneDay;
  }
}