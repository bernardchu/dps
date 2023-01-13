import React from "react";
import { Link } from "react-router-dom";
import { rehomeLink, routes } from "../../routing/routes";

export default class DpsRehome extends React.PureComponent {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2 className="application-heading">Rehome Requests</h2>
          <p>
            DPS Rescue receives many requests for rehoming and we are unable to respond to each one individually. If we have space in our program for your dog, you will receive a phone call from a member of our volunteer team. If we are able to take in your dog, please note that drop-off will be in the Bay Area.
          </p>
          <div className="application-buttons">
            <a href={rehomeLink}>Rehome Application</a>
          </div>


        </div>
      </div>
    );
  }
}
