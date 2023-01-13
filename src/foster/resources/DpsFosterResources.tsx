import React from "react";
import { Link } from "react-router-dom";
import { imgixDomain } from "../../common/DpsImgixDomain";
import { routes } from "../../routing/routes";

export default class DpsFosterResources extends React.PureComponent {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2 className="application-heading">Foster Resources</h2>
          <p>The following links are available to all DPS foster homes to support you on our foster journey! If you have other questions or need further training resources, please email your requests to <a href="mailto:foster@dpsrescue.org">foster@dpsrescue.org</a>.</p>
          <ol>
            <li><strong><a href={`https://${imgixDomain}/foster/faq/tips-for-getting-your-foster-pup-adopted.pdf`}>Tips for Getting your Foster Dog Adopted</a>:</strong> This handout contains advice, tips and tricks for helping DPS to market your foster dog and find them the right forever home.</li>
            <br />
            <li><strong><a href={`https://${imgixDomain}/foster/faq/foster-enrichment-101.pdf`}>Enrichment 101</a>:</strong> We know that everyone works full time and can&apos;t spend hours and hours doing training every day. This handout has some fun ideas for keeping your foster dog mentally and physically stimulated. It&apos;s just as important to tire out their minds as their bodies, so supplement daily walks with these activities for a well-rounded and calm foster dog!</li>
            <br />
            <li><strong><a href={`https://${imgixDomain}/foster/faq/crate-training.pdf`}>Crate Training</a>:</strong> Crate training is highly recommended for all dogs and puppies! Here is a step-by-step guide to teaching your foster pup to love their crate.</li>
            <br />
            <li><strong><a href={`https://${imgixDomain}/foster/faq/dps-puppy-packet.pdf`}>Puppy Manual</a>:</strong> Puppies can be a tremendous amount of fun, but they can also be exhausting! This manual contains many activities you can engage in with your foster puppy. Puppies are in a crucial socialization period of their lives; follow these tips to help DPS adopt out well-rounded and social puppies who will thrive in their adoptive homes!</li>
            <br />
            <li><strong><a href={`https://${imgixDomain}/foster/faq/shy-dogs.pdf`}>Tips and Tricks for Shy Dogs</a> and <a href={`https://${imgixDomain}/foster/faq/treat-and-retreat.pdf`}>Treat and Retreat</a></strong></li>
          </ol>
        </div>
      </div>
    );
  }
}
