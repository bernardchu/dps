import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';
import { routes } from '../routing/routes';
import DpsHomeCarousel from './DpsHomeCarousel';
import DpsHomeEvents from './DpsHomeEvents';
import DpsHomeFeatureCard from './DpsHomeFeatureCard';
import DpsHomeSidebarFeatures from './DpsHomeSidebarFeatures';

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
          <DpsHomeCarousel />
          <Link to={`${routes.adopt.path}/${routes.adopt.children!.available.path}`} className="hero-button col-xs-12">See All
            Available Dogs and Cats</Link>
        </div>
        <div className="col-md-8 col-sm-12 row features">
          <DpsHomeEvents />
          <DpsHomeFeatureCard feature={DpsHome.merchFeature} />
        </div>
        <DpsHomeSidebarFeatures />
      </div>

    );
  }
}
