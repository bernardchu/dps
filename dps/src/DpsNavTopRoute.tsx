import React from "react";
import { DpsNavRoute } from "./model/DpsNavRoute";

type DpsNavTopRouteProps = {
  route: DpsNavRoute
}

class DpsNavTopRoute extends React.Component<DpsNavTopRouteProps> {

  render() {
    return (
      <a className="nav-link" href={this.props.route.route}>
        {this.props.route.name}
        {this.props.route.children?.length &&
          <ul className="subnav">
            {this.props.route.children.map((child: DpsNavRoute) => {
              return <li>
                <a href={this.props.route.route + child.route}>{child.name}</a>
              </li>
            })}
          </ul>
        }
      </a>

    );
  }
}

export default DpsNavTopRoute;