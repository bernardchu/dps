import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import navRoutes from "../routing/routes";
import './hamburger.scss';
import DpsHamburgerChildMenu from './DpsHamburgerChildMenu';
import { NavLink } from 'react-router-dom';

export interface IDpsHamburgerMenuProps {
}

export default class DpsHamburgerMenu extends React.PureComponent<IDpsHamburgerMenuProps> {
  private static hiddenWidths = 'hidden-md hidden-lg';

  public render() {
    return (
      <Menu className={DpsHamburgerMenu.hiddenWidths} burgerButtonClassName={DpsHamburgerMenu.hiddenWidths}>
        {navRoutes.map((route) => {
          if (route.children?.length) {
            return <><span className="bm-item">{route.name}</span><DpsHamburgerChildMenu parent={route} /></>
          }
          return <NavLink to={route.path} className="bm-item">{route.name}</NavLink>
        })}
      </Menu>
    );
  }
}
