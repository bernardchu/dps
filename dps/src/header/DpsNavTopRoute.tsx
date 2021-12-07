import React from "react";
import DpsChildRouteMenu from "./DpsChildRouteMenu";
import { IDpsNavRoute } from "../model/DpsNavRoute";

interface DpsNavTopRouteProps {
  route: IDpsNavRoute
}

class DpsNavTopRoute extends React.Component<DpsNavTopRouteProps> {

  render() {
    const route: IDpsNavRoute = this.props.route;
    return (
      <a className="nav-link" href={route.route}>
        {route.name}
        {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
      </a>

    );
  }
}

export default DpsNavTopRoute;