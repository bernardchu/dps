import * as React from 'react';
import DpsApi from '../api/DpsApi';
import { IDpsDatesApiResponse } from '../api/IDpsApiResponses';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import DpsHomeEventLocation from './DpsHomeEventLocation';

export interface IDpsHomeEventsState extends IDpsAsyncState {
  locations: IDpsDatesApiResponse;
}

export default class DpsHomeEvents extends React.PureComponent<{}, IDpsHomeEventsState> {
  public componentDidMount() {
    DpsApi.getDates()
      .then((locations) => {
        this.setState({
          locations: locations,
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const locations = this.state?.locations;
    const loaded = this.state?.loaded;
    const keys = locations ? Object.keys(locations) : [];
    return (
      <div className="col-md-12 dates featured card">
        <h2>Upcoming Events</h2>
        <hr />
        {!loaded && <div>Loading...</div>}
        {loaded && keys.length === 0 && <h4 className="event">No upcoming events - stay tuned for updates!</h4>}
        {loaded && keys.length > 0 && keys.map(location => <DpsHomeEventLocation location={locations[location]} key={location} />)}
      </div>
    );
  }
}
/**
 * Example API response:
 * {
   "palo alto":{
      "name":"Palo Alto Pet Food Express",
      "map_url":"http:\/\/petfoodexpress.com\/stores\/detail\/palo-alto",
      "events":[
         {
            "date":"Sunday, August 26th",
            "time":"11:00am - 3:00pm",
            "note":"Please note we will not start adoption interviews after 2:30pm"
         }
      ]
   },
   "redwood city":{
      "name":"Redwood City Pet Food Express @ Woodside Plaza",
      "map_url":"http:\/\/maps.google.com\/maps?daddr=372%20Woodside%20Plaza,Redwood%20City,CA,94061",
      "events":[
         {
            "date":"Sunday, September 2nd",
            "time":"12:00pm - 4:00pm"
         }
      ]
   },
   "adoptathon":{
      "name":"Bay Area Pet Fair",
      "map_url":"http:\/\/www.bayareapetfair.org\/contact-us",
      "events":[
         {
            "date":"Saturday, September 15th",
            "time":"10:00am - 5:00pm"
         },
         {
            "date":"Sunday, September 16th",
            "time":"10:00am - 5:00pm"
         }
      ]
   }
}
 */