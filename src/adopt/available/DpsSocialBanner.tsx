import * as React from 'react';
import Imgix from 'react-imgix';
import { Link } from 'react-router-dom';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import { routes } from '../../routing/routes';

export default class DpsSocialBanner extends React.PureComponent {
  private static SOCIAL_ICON_WIDTH = 60; // px

  public render() {
    return (
      <div className="social-banner-container">
        <div className="social-banner">
          <Imgix
            src="/Follow-us.png"
            width={100}
            className="no-border hidden-xs"
            htmlAttributes={{ alt: 'Follow us' }} />
          <div className="social-banner-text">
            <h2>Don&rsquo;t see the perfect pup?</h2>
            <h4>Be the first to find out when new dogs and puppies are available!</h4>
          </div>
          <div className="image-container hidden-xs">

            <a href="https://www.facebook.com/DPSRescue" target="_blank" rel="noreferrer">
              <Imgix
                className="social-icon"
                src="/social-icons-facebook.png"
                width={DpsSocialBanner.SOCIAL_ICON_WIDTH}
                htmlAttributes={{ alt: 'DPSRescue Facebook' }} />
            </a>
            <a href="https://www.instagram.com/dpsrescue/" target="_blank" rel="noreferrer">
              <Imgix
                className="social-icon"
                src="/social-icons-instagram.png"
                width={DpsSocialBanner.SOCIAL_ICON_WIDTH}
                imgixParams={{ pad: 7, bg: 'cd486b' }}
                htmlAttributes={{ alt: 'DPSRescue Instagram' }} />
            </a>

          </div>
        </div>
      </div>
    );
  }
}
