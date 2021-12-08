import * as React from 'react';
import { Link } from 'react-router-dom';
import DpsFeatures from './DpsFeatures';

export default class DpsHome extends React.PureComponent {
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
          <div className="row">
            <div className="col-md-12 featured card">
              <h2>Get DPS Merchandise at Our Online Store</h2>
              <hr />
              <span className="featured_img">
                <a href="https://www.bonfire.com/store/dpsrescue/" target="_blank" rel="noreferrer">
                  <img src="https://dps-festive.imgix.net/images/home/merch.png?auto=format&pad=20&bg=2E8C69" alt="merch" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <DpsFeatures />
      </div>

    );
  }
}
