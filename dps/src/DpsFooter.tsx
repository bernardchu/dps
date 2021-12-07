import React from "react";

class DpsFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <p>Copyright {new Date().getUTCFullYear()} Doggie Protective Services | PO Box 1508 • Romoland, CA 92585</p>
      </div>
    );
  }
}

export default DpsFooter;
