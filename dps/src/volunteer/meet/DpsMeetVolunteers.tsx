import * as React from 'react';
import DpsApi from '../../api/DpsApi';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsVolunteer } from '../../model/IDpsVolunteer';
import './meetVolunteers.scss';

interface IDpsMeetVolunteersState extends IDpsAsyncState {
  directors: IDpsVolunteer[];
  primary: IDpsVolunteer[];
  secondary: IDpsVolunteer[];
}

/**
 * You can see in the code the idea of "secondary" volunteers because there used to be some
 * concept of "primary" volunteers, but that has since been removed.
 */
export default class DpsMeetVolunteers extends React.PureComponent<{}, IDpsMeetVolunteersState> {
  public componentDidMount() {
    DpsApi.getVolunteers()
      .then((volunteers) => {
        this.setState({
          loaded: true,
          ...volunteers
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const loaded = this.state?.loaded;
    const secondary = this.state?.secondary;
    const directors = this.state?.directors;
    return (<>
      <h2>Meet Our Volunteers</h2>
      <div className="row secondary volunteer-section">
        {!loaded && <div>Loading...</div>}
        {loaded && secondary.map(volunteer => <div className="secondary-volunteer col-md-4 col-sm-6 row" key={volunteer.photo}>
          <div className="col-xs-4 secondary-volunteer-image">
            <div className="image-circle-cropper">
              <img src={volunteer.photo} alt={volunteer.name} />
            </div>
          </div>
          <div className="col-xs-8 secondary-volunteer-details">
            <h3 className="name">{volunteer.name}</h3>
            <h5 className="title">{volunteer.title}</h5>
          </div>
        </div>
        )}
      </div>
      <div className="row directors volunteer-section">
        <h2>Board of Directors and Executive Officers</h2>
        {!loaded && <div>Loading...</div>}
        {loaded && directors.map(director => <div className="secondary-volunteer col-md-4 col-sm-6 row" key={director.photo}>
          <div className="col-xs-4 secondary-volunteer-image">
            <div className="image-circle-cropper">
              <img src={director.photo} alt={director.name} />
            </div>
          </div>
          <div className="col-xs-8 secondary-volunteer-details">
            <h3 className="name">{director.name}</h3>
            <h5 className="title">{director.title}</h5>
          </div>
        </div>
        )}
      </div>
    </>);
  }
}
