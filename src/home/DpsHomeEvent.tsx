import * as React from 'react';
import { IDpsEvent } from '../model/IDpsEvent';

export interface IDpsHomeEventProps {
  event: IDpsEvent;
}

export default class DpsHomeEvent extends React.PureComponent<IDpsHomeEventProps> {
  public render() {
    const event = this.props.event;
    return (
      <div className="event-location">
        <h3>{event.title}</h3>
        <div className="event">
          <div className="event-date">{event.date}</div>
          <div className="event-time">{event.time}</div>
          {event.notes && <div className="event-note">{event.notes}</div>}
          <a href={event.locationLink}>Location and directions</a>
        </div>
      </div>
    );
  }
}
