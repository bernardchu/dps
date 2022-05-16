import React from "react";
import DpsChildRouteMenu from "./DpsChildRouteMenu";
import { IDpsNavRoute } from "../model/IDpsRoutes";
import { isHome, NavLink } from '../routing/NavLink';
import { convertToNbsp } from "../routing/routes";

interface DpsNavTopRouteProps {
  route: IDpsNavRoute
}

class DpsNavTopRoute extends React.Component<DpsNavTopRouteProps> {
  render() {
    const route: IDpsNavRoute = this.props.route;
    return (
      <div className="nav-link">
        <NavLink
          href={DpsNavTopRoute.getTopRoutePath(route)}
          exact={isHome(route)}
          path={route.path}
          className="parent-link"
          dangerouslySetInnerHTML={{ __html: convertToNbsp(route.name) }} />
        {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
      </div>
    );
  }

  private static getTopRoutePath(route: IDpsNavRoute): string {
    if (!route.children) { return '/' + route.path; }
    return `/${route.path}/${route.children![0].path}`
  }
}

export default DpsNavTopRoute;