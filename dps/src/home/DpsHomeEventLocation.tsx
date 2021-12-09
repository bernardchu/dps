import * as React from 'react';
import { IDpsEventLocation } from '../model/IDpsEventsInterfaces';
import DpsHomeEventLocationEvent from './DpsHomeEventLocationEvent';

export interface IDpsHomeEventLocationProps {
  location: IDpsEventLocation;
}

export default class DpsHomeEventLocation extends React.PureComponent<IDpsHomeEventLocationProps> {
  public render() {
    const location = this.props.location;
    return (
      <div className="event-location">
        <h3>{location.name}</h3>
        <a href={location.map_url}>Location and directions</a>
        {location.events.map(event => <DpsHomeEventLocationEvent event={event} key={event.date + event.time} />)}
      </div>
    );
  }
}
