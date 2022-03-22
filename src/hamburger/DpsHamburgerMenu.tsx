import * as React from 'react';
import Imgix from 'react-imgix';
import { slide as Menu } from 'react-burger-menu';
import navRoutes from "../routing/routes";
import './hamburger.scss';
import DpsHamburgerChildMenu from './DpsHamburgerChildMenu';
import { NavLink } from 'react-router-dom';
import DpsHero from '../header/DpsHero';

export interface IDpsHamburgerMenuState {
  menuOpen: boolean;
}

export default class DpsHamburgerMenu extends React.PureComponent<{}, IDpsHamburgerMenuState> {
  private static hiddenWidths = 'hidden-sm hidden-md hidden-lg';
  constructor(props: any) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state: { isOpen: boolean }) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  public render() {
    return (
      <Menu className={DpsHamburgerMenu.hiddenWidths}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        burgerButtonClassName={DpsHamburgerMenu.hiddenWidths}>
        {navRoutes.map((route) => {
          if (route.children?.length) {
            return <DpsHamburgerChildMenu parent={route} hamburgerCloser={this.closeMenu.bind(this)} key={route.name} />
          }
          return <NavLink to={route.path} className="bm-item" onClick={() => this.closeMenu()} key={route.name}>{route.name}</NavLink>
        })}
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
      </Menu>
    );
  }
}
