import React from "react";
import navRoutes from "../routing/routes";
import DpsHero from "./DpsHero";
import DpsNav from "./DpsNav";

class DpsHeader extends React.Component {
  render() {
    return (
      <div className="masthead">
        <DpsHero />
        <DpsNav routes={navRoutes} />
      </div>
    );
  }
}

export default DpsHeader;