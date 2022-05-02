import * as React from 'react';
import Imgix from 'react-imgix';
import { paypalEmail } from '../common/DpsConstants';

export interface IDpsSocialsProps {
  className?: string;
}

export default class DpsSocials extends React.PureComponent<IDpsSocialsProps> {
  private static SOCIAL_ICON_WIDTH = 41; // px
  private static INSTAGRAM_BG_COLOR = 'cd486b';

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
              imgixParams={{ pad: 7, bg: DpsSocials.INSTAGRAM_BG_COLOR }}
              htmlAttributes={{ alt: 'DPSRescue Instagram' }} />
          </a>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value={paypalEmail} />
          <input type="hidden" name="lc" value="US" />
          <input type="hidden" name="item_name" value="Doggie Protective Services" />
          <input type="hidden" name="no_note" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    );
  }
}
