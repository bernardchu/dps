import _ = require('lodash');

// basically what we get from DB
export interface ISheetEvent extends IEvent {
  location: string,
  includeInDogApp: boolean,
  includeInCatApp: boolean,
}

interface IEvent {
  date: string;
  time: string;
  title: string,
  locationLink: string,
  notes?: string;
}

export class DatesHandler {
  private static MILLISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

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
      time: event.time,
      title: event.title,
      locationLink: event.locationLink,
      notes: event.notes
    };
    return e;
  }

  public static organize(eventData: ISheetEvent[]): IEvent[] {
    const upcoming: ISheetEvent[] = eventData.filter(event => this.isUpcoming(event));
    return upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(e => this.finalizeEvent(e))
  }
}