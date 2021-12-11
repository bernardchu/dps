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
      <>
        <NavLink to={route.path} className="nav-link">
          {route.name}
          {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
        </NavLink>
      </>
    );
  }
}

export default DpsNavTopRoute;