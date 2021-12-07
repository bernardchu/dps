import React from "react";
import DpsChildRouteMenu from "./DpsChildRouteMenu";
import { IDpsNavRoute } from "../model/DpsNavRoute";
import { NavLink } from "react-router-dom";

interface DpsNavTopRouteProps {
  route: IDpsNavRoute
}

class DpsNavTopRoute extends React.Component<DpsNavTopRouteProps> {

  render() {
    const route: IDpsNavRoute = this.props.route;
    const path: string = route.children?.length ? `${route.path}/${route.children[0].path}` : route.path;
    return (
      <div>
        <NavLink className="nav-link" to={path}>
          {route.name}
        </NavLink>
        {route.children?.length && <DpsChildRouteMenu children={route.children} parent={route} />}
      </div>

    );
  }
}

export default DpsNavTopRoute;