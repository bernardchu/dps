import * as React from 'react';
import Imgix from 'react-imgix';
import DpsSocials from '../../header/DpsSocials';

export default class DpsSocialBanner extends React.PureComponent {
  public render() {
    return (
      <div className="social-banner-container">
        <div className="social-banner hidden-xs">
          <FollowUs />
          <div className="social-banner-text">
            <BannerText />
          </div>
          <div className="image-container ">
            <SocialIcons />
          </div>
        </div>
        <div className="social-banner social-banner-xs hidden-sm hidden-md hidden-lg hidden-xl">
          <div className="social-banner-text">
            <BannerText />
          </div>
          <div className="image-container ">
            <FollowUs />
            <div className="social-icons">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class FollowUs extends React.PureComponent {
  public render() {
    return (
      <Imgix
        src="/Follow-us.png"
        width={100}
        className="no-border"
        htmlAttributes={{ alt: 'Follow us' }} />
    );
  }
}

class BannerText extends React.PureComponent {
  public render() {
    return (<>
      <h2>Don&rsquo;t see the perfect pup?</h2>
      <h4>Be the first to find out when new dogs and puppies are available!</h4>
    </>);
  }
}

class SocialIcons extends React.PureComponent {
  private static SOCIAL_ICON_WIDTH = 60; // px
  public render() {
    return (<>
      <a href="https://www.facebook.com/DPSRescue" target="_blank" rel="noreferrer">
        <Imgix
          className="social-icon"
          src="/social-icons-facebook.png"
          width={SocialIcons.SOCIAL_ICON_WIDTH}
          htmlAttributes={{ alt: 'DPSRescue Facebook' }} />
      </a>
      <a href="https://www.instagram.com/dpsrescue/" target="_blank" rel="noreferrer">
        <Imgix
          className="social-icon"
          src="/social-icons-instagram.png"
          width={SocialIcons.SOCIAL_ICON_WIDTH}
          imgixParams={{ pad: DpsSocials.INSTAGRAM_PADDING, bg: DpsSocials.INSTAGRAM_BG_COLOR }}
          htmlAttributes={{ alt: 'DPSRescue Instagram' }} />
      </a>
    </>);
  }
}
