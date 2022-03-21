import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import navRoutes from "../routing/routes";
import './hamburger.scss';
import DpsHamburgerChildMenu from './DpsHamburgerChildMenu';
import { NavLink } from 'react-router-dom';

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
            return <DpsHamburgerChildMenu parent={route} hamburgerCloser={this.closeMenu.bind(this)} />
          }
          return <NavLink to={route.path} className="bm-item" onClick={() => this.closeMenu()}>{route.name}</NavLink>
        })}
      </Menu>
    );
  }
}
