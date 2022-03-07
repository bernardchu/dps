import React from "react";
import { Link } from "react-router-dom";
import Imgix from 'react-imgix';

class DpsHero extends React.Component {
  private static SOCIAL_ICON_WIDTH = 41; // px
  private static INSTAGRAM_BG_COLOR = 'cd486b';

  render() {
    return (
      <div className="row hero">
        <Link to="/" className="logo col-md-2 hidden-sm hidden-xs">
          <Imgix
            src="https://dps-festive.imgix.net/images/logo-v2.png"
            imgixParams={{ rect: '210,400,390,230', auto: 'format' }}
            htmlAttributes={{ alt: 'DPS Logo' }} />
        </Link>
        <Link to="/" className="logo hidden-md hidden-lg col-sm-10 col-xs-10">
          <Imgix
            src="https://dps-festive.imgix.net/images/logo-v2.png"
            imgixParams={{ rect: '210,400,690,230', auto: 'format' }}
            htmlAttributes={{ alt: 'DPS Logo' }} />
        </Link>
        <div className="col-md-8 col-sm-9 title hidden-sm hidden-xs">
          <h1>Doggie Protective Services</h1>
        </div>
        <div className="social col-md-2 col-sm-3">
          <div className="small">
            <a href="https://twitter.com/dpsrescue" target="_blank" rel="noreferrer">
              <Imgix
                src="https://dps-festive.imgix.net/images/social-icons-twitter.png"
                width={DpsHero.SOCIAL_ICON_WIDTH}
                htmlAttributes={{ alt: 'Twitter @DPSRescue' }} />
            </a>
            <a href="https://www.facebook.com/DPSRescue" target="_blank" rel="noreferrer">
              <Imgix
                src="https://dps-festive.imgix.net/images/social-icons-facebook.png"
                width={DpsHero.SOCIAL_ICON_WIDTH}
                htmlAttributes={{ alt: 'DPSRescue Facebook' }} />
            </a>
            <a href="https://www.instagram.com/dpsrescue/" target="_blank" rel="noreferrer">
              <Imgix
                src="https://dps-festive.imgix.net/images/social-icons-instagram.png"
                width={DpsHero.SOCIAL_ICON_WIDTH}
                imgixParams={{ pad: 7, bg: DpsHero.INSTAGRAM_BG_COLOR }}
                htmlAttributes={{ alt: 'DPSRescue Instagram' }} />
            </a>
          </div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="doggieprotectiveservices@earthlink.net" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="Doggie Protective Services" />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    );
  }
}

export default DpsHero;
