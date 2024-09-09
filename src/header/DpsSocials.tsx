import * as React from 'react';
import Imgix from 'react-imgix';
import { paypalEmail } from '../common/DpsConstants';
import DpsDonateButton from '../common/DpsDonateButton';

export interface IDpsSocialsProps {
  className?: string;
}

export default class DpsSocials extends React.PureComponent<IDpsSocialsProps> {
  private static SOCIAL_ICON_WIDTH = 41; // px
  public static INSTAGRAM_BG_COLOR = 'cd486b';
  public static INSTAGRAM_PADDING = 7;

  public render() {
    return (
      <div className={`social col-md-2 col-sm-3 ${this.props.className}`}>
        <div className="small">
          <a href="https://twitter.com/dpsrescue" target="_blank" rel="noreferrer">
            <Imgix
              src="/social-icons-twitter.png"
              width={DpsSocials.SOCIAL_ICON_WIDTH}
              htmlAttributes={{ alt: 'Twitter @DPSRescue' }} />
          </a>
          <a href="https://www.facebook.com/DPSRescue" target="_blank" rel="noreferrer">
            <Imgix
              src="/social-icons-facebook.png"
              width={DpsSocials.SOCIAL_ICON_WIDTH}
              htmlAttributes={{ alt: 'DPSRescue Facebook' }} />
          </a>
          <a href="https://www.instagram.com/dpsrescue/" target="_blank" rel="noreferrer">
            <Imgix
              src="/social-icons-instagram.png"
              width={DpsSocials.SOCIAL_ICON_WIDTH}
              imgixParams={{ pad: DpsSocials.INSTAGRAM_PADDING, bg: DpsSocials.INSTAGRAM_BG_COLOR }}
              htmlAttributes={{ alt: 'DPSRescue Instagram' }} />
          </a>
        </div>
        <DpsDonateButton />
      </div>
    );
  }
}
