import _ = require('lodash');

// basically what we get from DB
export interface ISheetEvent extends IEvent {
  location: string;
  lastinterview: string;
}

// what we want to output
type EventsByLocation = {
  [key: string]: IEventLocation;
};

interface IEventLocation extends IStoreInfo {
  events: IEvent[];
}

interface IEvent {
  date: string;
  time: string;
  note?: string;
}

interface IStoreInfo {
  name: string;
  map_url: string;
}

export class DatesHandler {
  private static MILLISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

  private static stores: { [key: string]: IStoreInfo } = {
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

  private static isUpcoming(event: ISheetEvent): boolean {
    const eventStartTime = new Date(event.date);
    return eventStartTime.getTime() - new Date().getTime() > -this.MILLISECONDS_IN_ONE_DAY;
  }

  private static finalizeEvent(event: ISheetEvent): IEvent {
    const date = new Date(event.date);
    const formattedDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
      .format(date); // e.g. Saturday, March 5
    const e: IEvent = {
      date: formattedDate,
      time: event.time
    };
    if (!!event.lastinterview) {
      e.note = `Please note we will not start adoption interviews after ${event.lastinterview}.`;
    }
    return e;
  }

  public static organize(eventData: ISheetEvent[]): EventsByLocation {
    const upcoming: ISheetEvent[] = eventData.filter(event => this.isUpcoming(event));
    const groupedByLocation: { [key: string]: ISheetEvent[] } = _.groupBy(upcoming, e => e.location);
    return Object.keys(groupedByLocation).reduce((ret, location) => {
      ret[location] = {
        events: groupedByLocation[location].map(e => this.finalizeEvent(e)),
        map_url: this.stores[location].map_url,
        name: this.stores[location].name
      }
      return ret;
    }, {});
  }
}