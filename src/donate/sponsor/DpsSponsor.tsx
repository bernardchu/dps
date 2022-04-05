import * as React from 'react';
import './sponsor.scss';
import Imgix from 'react-imgix';

export default class DpsSponsor extends React.PureComponent {
  public render() {
    return (
      <div className="sponsor donate row">
        <div className="col-md-8 col-sm-12">
          <h1>Sponsor a Dog</h1>
          <em>Your sponsorship helps pay for this dog's spay/neuter surgery, flea treatment, food, and more!</em>
          <p>Step 1: Visit our Adoptable Dogs page and choose a dog you would like to sponsor</p>
          <p>Step 2: Submit a $50 donation via Zelle or Venmo</p>
          <p>Step 3: Send an email to <a href="mailto:rachel@dpsrescue.com">rachel@dpsrescue.com</a> with the name of the dog you’d like to sponsor and a short message (ex: Sponsored by Sarah in honor of her dog Rex)</p>
          <br />
          <p>Your message will be posted on the dog's bio within 48 hours!</p>
        </div>
        <div className="col-md-4 hidden-sm hidden-xs image">
          <Imgix src="donate/sponsor/Nebula.png" htmlAttributes={{ alt: 'Nebula\'s care was sponsored by Ima Lifesaver', title: 'Nebula example' }} />
        </div>
      </div>
    );
  }
}
