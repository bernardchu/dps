import * as React from 'react';
import { IDpsEvent } from '../model/IDpsEventsInterfaces';

export interface IDpsHomeEventLocationEventProps {
  event: IDpsEvent;
}

export default class DpsHomeEventLocationEvent extends React.PureComponent<IDpsHomeEventLocationEventProps> {
  public render() {
    const event = this.props.event;
    return (
      <div className="event">
        <div className="event-date">{event.date}</div>
        <div className="event-time">{event.time}</div>
        {event.note && <div className="event-note">{event.note}</div>}
      </div>)
  }
}
