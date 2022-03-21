import React from "react";
import DpsNavTopRoute from "./DpsNavTopRoute";
import { IDpsNavRoute } from "../model/IDpsRoutes";

interface IDpsNavProps {
  routes: IDpsNavRoute[];
}

class DpsNav extends React.Component<IDpsNavProps> {
  render() {
    return (
      <nav className="hidden-xs nav">
        {this.props.routes.map((route) => <DpsNavTopRoute route={route} key={route.name} />)}
      </nav>
    );
  }
}

export default DpsNav;