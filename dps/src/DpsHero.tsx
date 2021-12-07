import React from "react";

class DpsHero extends React.Component {
  render() {
    return (
      <div className="row hero">
        <a href="http://dpsrescue.org" className="logo col-md-2 hidden-sm hidden-xs">
          <img src="http://dps-festive.imgix.net/images/logo-v2.png?rect=210,400,390,230&amp;auto=format" alt="DPS Logo" />
        </a>
        <a href="http://dpsrescue.org" className="logo hidden-md hidden-lg col-sm-10 col-xs-10">
          <img src="http://dps-festive.imgix.net/images/logo-v2.png?rect=210,400,690,230&amp;auto=format" alt="DPS Logo" />
        </a>
        <div className="col-md-8 col-sm-9 title hidden-sm hidden-xs">
          <h1>Doggie Protective Services</h1>
        </div>
      </div>
    );
  }
}

export default DpsHero;
