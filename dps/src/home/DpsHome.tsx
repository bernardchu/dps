import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';
import DpsHomeFeatureCard from './DpsBasicFeatureCard';
import DpsFeatures from './DpsFeatures';

export default class DpsHome extends React.PureComponent {
  private static merchFeature: IDpsHomeFeatureCardData = {
    title: 'Get DPS Merchandise at Our Online Store',
    externalLink: 'https://www.bonfire.com/store/dpsrescue/',
    imgSrc: 'https://dps-festive.imgix.net/images/home/merch.png?auto=format&pad=20&bg=2E8C69',
  }

  public render() {
    return (
      <div>
        <div className="row">
          <div className="adoptable col-md-12"></div>

          <Link to="adopt/available" className="hero-button col-xs-12">See All
            Available Dogs and Cats</Link>
        </div>
        <div className="col-md-8 col-sm-12 row features">
          <div className="col-md-12 dates featured card">
            <h2>Upcoming Events</h2>
            <hr />
          </div>
          <DpsHomeFeatureCard feature={DpsHome.merchFeature} />
        </div>
        <DpsFeatures />
      </div>

    );
  }
}
