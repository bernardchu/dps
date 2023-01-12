import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routing/routes";

export default class DpsLittermateSyndrome extends React.PureComponent {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2 className="application-heading">Littermate Syndrome</h2>
          <p>
            Why does DPS Rescue not allow families to adopt two puppies from the same litter? Here is a little bit of information about Littermate Syndrome, a well-documented issue that occurs when two or more puppies from the same litter are raised in the same household. This phenomenon has been studied extensively by dog scientists and behaviorists, and the best way to prevent it is simply to not adopt out littermates together!
          </p>

          <h2 className="application-heading">Behavioral Issues Associated with Littermate Syndrome</h2>
          <p>
            From a young age, littermate puppies have formed a very strong bond, learning and feeding off of each other&#39;s emotions. This can lead to behavioral issues in one or both of the dogs as they grow and develop. These behaviors often include:
          </p>
          <ul>
            <li>Fear of people and other dogs</li>
            <li>Extreme separation anxiety</li>
            <li>Crate Issues</li>
            <li>Issues when encountering new situations when alone</li>
            <li>Leash Reactivity</li>
            <li>Higher incidence of fighting as compared to non-siblings being raised together</li>
          </ul>
          <p>
            These issues aren&#39;t often experienced right away, but as both dogs reach maturity, they tend to intensify. Littermate syndrome can also cause aggression, even when the puppies are raised properly. Littermate syndrome causes dogs to not go through their normal developmental process and takes a huge amount of work to overcome once it is present.
          </p>
          <p>
            <strong>Interested in adopting two puppies and raising them together?</strong>&nbsp;DPS is open to adopting out two puppies from two different litters at the same time! For more information, please fill out an <Link to={`../${routes.adopt.children!.dogApp.path}`}>application to adopt</Link>.
          </p>
        </div>
      </div>
    );
  }
}
