import * as React from 'react';
import { IDpsNavRoute } from '../model/DpsNavRoute';

export interface IDpsChildRouteMenuProps {
  children: IDpsNavRoute[];
  parent: IDpsNavRoute;
}

export default class DpsChildRouteMenu extends React.Component<IDpsChildRouteMenuProps> {
  public render() {
    return (
      <ul className="subnav">
        {this.props.children.map((child: IDpsNavRoute) => {
          return <li>
            <a href={this.props.parent.route + child.route}>{child.name}</a>
          </li>
        })}
      </ul>
    );
  }
}
