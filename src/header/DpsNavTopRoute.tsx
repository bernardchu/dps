import React from "react";
import DpsChildRouteMenu from "./DpsChildRouteMenu";
import { IDpsNavRoute } from "../model/IDpsRoutes";
import { NavLink } from "react-router-dom";

interface DpsNavTopRouteProps {
  route: IDpsNavRoute
}

class DpsNavTopRoute extends React.Component<DpsNavTopRouteProps> {
  render() {
    const route: IDpsNavRoute = this.props.route;
    return (
      <div className="nav-link">
        <NavLink
          to={route.path}
          className="parent-link"
          dangerouslySetInnerHTML={{ __html: DpsNavTopRoute.convertToNbsp(route.name) }} />
        {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
      </div>
    );
  }

  private static convertToNbsp(name: string): string {
    return name.replace(/\s/g, '&nbsp;');
  }
}

export default DpsNavTopRoute;