import * as React from 'react';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsFoster, IDpsFosterSpotlight } from '../../model/IDpsFoster';
import styles from './meetFosters.module.scss';
import Imgix from 'react-imgix';

interface IDpsMeetFostersProps {
  fosters: IDpsFoster[];
  spotlight: IDpsFosterSpotlight
}

export default class DpsMeetFosters extends React.PureComponent<IDpsMeetFostersProps> {
  public render() {
    const { fosters, spotlight } = this.props;
    return (<>
      <div className={`row ${styles.intro}`}>
        <div className="col-sm-8 col-xs-12 prose">
          <h2>Meet Our Fosters</h2>
          <p>Whether new or old, we are so thankful for our foster families who open
            their hearts and homes to our dogs. Here are just a few of the incredible
            people who help our rescue save lives!</p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <Imgix className={`no-border ${styles.fosters}`} src="/foster/fosters/fosters-header.jpg" htmlAttributes={{ alt: 'fosters' }} />
        </div>
      </div>
      <div className={`row ${styles.spotlight} card feature`}>
        <div className="col-sm-3 hidden-xs photo">
          <img src={spotlight.photo} alt={spotlight.name} title={spotlight.name} className={`no-border ${styles.fosters}`} />
        </div>
        <div className={`col-sm-9 col-xs-12 ${styles.bio}`}>
          <h3>Foster Spotlight: {spotlight.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: spotlight.bio }}></p>
        </div>
      </div>
      <div className={`row ${styles.fosters}`}>
        {fosters.map(foster => <div className={`col-md-4 col-sm-6 col-xs-12 ${styles.foster}`} key={foster.photo}>
          <div className={`col-xs-4 ${styles.photo}`}>
            <img src={foster.photo} alt={foster.name} title={foster.name} className={`no-border ${styles.fosters}`} />
          </div>
          <div className={`col-xs-8 ${styles.bio}`}>
            <h3>{foster.name}</h3>
          </div>
        </div>
        )}
      </div>
    </>
    );
  }
}
