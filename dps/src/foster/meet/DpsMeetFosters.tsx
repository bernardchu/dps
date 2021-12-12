import * as React from 'react';
import DpsApi from '../../api/DpsApi';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsFoster, IDpsFosterSpotlight } from '../../model/IDpsFoster';
import './meetFosters.scss';

interface IDpsMeetFostersState extends IDpsAsyncState {
  fosters: IDpsFoster[];
  spotlight: IDpsFosterSpotlight
}

export default class DpsMeetFosters extends React.PureComponent<{}, IDpsMeetFostersState> {
  public componentDidMount() {
    DpsApi.getFosters()
      .then((fosterData) => {
        this.setState({
          loaded: true,
          ...fosterData
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const loaded = this.state?.loaded;
    const fosters = this.state?.fosters;
    const spotlight = this.state?.spotlight;
    return (<>
      <div className="row intro">
        <div className="col-sm-8 col-xs-12 prose">
          <h2>Meet Our Fosters</h2>
          <p>Whether new or old, we are so thankful for our foster families who open
            their hearts and homes to our dogs. Here are just a few of the incredible
            people who help our rescue save lives!</p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <img className="no-border" src="http://dps-festive.imgix.net/images/foster/fosters/fosters-header.jpg" alt="fosters" />
        </div>
      </div>
      <div className="row spotlight card feature">
        {!loaded && <div>Loading...</div>}
        {loaded && <>
          <div className="col-sm-3 hidden-xs photo">
            <img src={spotlight.photo} alt={spotlight.name} title={spotlight.name} className="no-border" />
          </div>
          <div className="col-sm-9 col-xs-12 bio">
            <h3>Foster Spotlight: {spotlight.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: spotlight.bio }}></p>
          </div>
        </>}
      </div>
      <div className="row fosters">
        {!loaded && <div>Loading...</div>}
        {loaded && fosters.map(foster => <div className="col-md-4 col-sm-6 foster" key={foster.photo}>
          <div className="col-xs-4 photo">
            <img src={foster.photo} alt={foster.name} title={foster.name} className="no-border" />
          </div>
          <div className="col-xs-8 bio">
            <h3>{foster.name}</h3>
          </div>
        </div>
        )}
      </div>
    </>
    );
  }
}
