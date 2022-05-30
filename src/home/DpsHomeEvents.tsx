import * as React from 'react';
import DpsApi from '../api/DpsApi';
import { IDpsDatesApiResponse } from '../api/IDpsApiResponses';
import DpsLoading from '../common/DpsLoading';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import DpsHomeEvent from './DpsHomeEvent';

export interface IDpsHomeEventsState extends IDpsAsyncState {
  events: IDpsDatesApiResponse;
}

export default class DpsHomeEvents extends React.PureComponent<{}, IDpsHomeEventsState> {
  public componentDidMount() {
    DpsApi.getDates()
      .then((events) => {
        this.setState({
          events,
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const events = this.state?.events;
    const loaded = this.state?.loaded;
    return (
      <div className="col-md-12 dates featured card">
        <h2>Upcoming Events</h2>
        <hr />
        {!loaded && <DpsLoading />}
        {loaded && events.length === 0 && <h4 className="event">No upcoming events - stay tuned for updates!</h4>}
        {loaded && events.length > 0 && events.map(event => <DpsHomeEvent event={event} key={event.title} />)}
      </div>
    );
  }
}
