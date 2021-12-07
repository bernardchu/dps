import React from "react";
import DpsHero from "./DpsHero";
import DpsNav from "./DpsNav";

class DpsHeader extends React.Component {
  render() {
    return (
      <div className="masthead">
        <DpsHero />
        <DpsNav />
      </div>
    );
  }
}

export default DpsHeader;