import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IDpsNavRoute } from '../model/IDpsRoutes';

export interface IDpsHamburgerChildMenuProps {
  parent: IDpsNavRoute;
}

export default class DpsHamburgerChildMenu extends React.PureComponent<IDpsHamburgerChildMenuProps> {
  public render() {
    const parent = this.props.parent;
    return (
      <ul className="bm-child-list">
        {parent.children!.map((child: IDpsNavRoute) => {
          return <li key={child.path} className="bm-child-list-item">
            <NavLink to={`${parent.path}/${child.path}`}>{child.name}</NavLink>
          </li>
        })}
      </ul>
    );
  }
}
