import React from "react";
import routes from "../routing/routes";
import DpsHero from "./DpsHero";
import DpsNav from "./DpsNav";

class DpsHeader extends React.Component {
  render() {
    return (
      <div className="masthead">
        <DpsHero />
        <DpsNav routes={routes} />
      </div>
    );
  }
}

export default DpsHeader;