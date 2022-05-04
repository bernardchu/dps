import React from "react";
import DpsChildRouteMenu from "./DpsChildRouteMenu";
import { IDpsNavRoute } from "../model/IDpsRoutes";
import { NavLink } from '../routing/NavLink';
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
          href={route.path}
          className="parent-link"
          dangerouslySetInnerHTML={{ __html: convertToNbsp(route.name) }} />
        {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
      </div>
    );
  }
}

export default DpsNavTopRoute;