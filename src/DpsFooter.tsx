import React from "react";

class DpsFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <p>Copyright {new Date().getUTCFullYear()} Doggie Protective Services | 809 San Antonio Road Suite #8 • Palo Alto, CA 94303</p>
      </div>
    );
  }
}

export default DpsFooter;
