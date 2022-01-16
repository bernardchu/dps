import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IDpsNavRoute } from '../model/IDpsRoutes';

export interface IDpsChildRouteMenuProps {
  children: IDpsNavRoute[];
  parent: IDpsNavRoute;
}

export default class DpsChildRouteMenu extends React.Component<IDpsChildRouteMenuProps> {
  public render() {
    return (
      <ul className="subnav">
        {this.props.children.map((child: IDpsNavRoute) => {
          return <li key={child.path}>
            <NavLink to={`${this.props.parent.path}/${child.path}`}>{child.name}</NavLink>
          </li>
        })}
      </ul>
    );
  }
}
