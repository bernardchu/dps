import * as React from 'react';
import './sponsor.scss';
import Imgix from 'react-imgix';
import { donateEmail } from '../../common/DpsConstants';

export default class DpsSponsor extends React.PureComponent {
  public render() {
    return (
      <>
        <div className="sponsor donate row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <h1>Sponsor a Dog</h1>
            <em>Your sponsorship helps pay for this dog's spay/neuter surgery, flea treatment, food, and more!</em>
            <p>Step 1: Visit our Adoptable Dogs page and choose a dog you would like to sponsor</p>
            <p>Step 2: Submit a $50 donation via Zelle or Venmo</p>
            <p>Step 3: Send an email to <a href={`mailto:${donateEmail}`}>{donateEmail}</a> with the name of the dog you’d like to sponsor and a short message (ex: Sponsored by Sarah in honor of her dog Rex)</p>
            <br />
            <p>Your message will be posted on the dog's bio within 48 hours!</p>
          </div>
          <div className="col-md-4 col-sm-6 hidden-xs image">
            <Imgix
              src="donate/sponsor/Nebula.png"
              className="no-border"
              htmlAttributes={{ alt: 'Nebula\'s care was sponsored by Ima Lifesaver', title: 'Nebula example' }} />
          </div>
        </div>
        <hr />
        <div className="donate sponsor row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <h1>In Memory of Ginger</h1>
            <p>Thank you Annie for sponsoring two of our dogs and then helping with other costs.</p>
            <p>You are truly a gem.</p>
            <p>We appreciate you so much.</p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ginger">
            <Imgix
              src="donate/sponsor/Ginger.jpg"
              className="no-border"
              width={380}
              height={380}
              imgixParams={{
                crop: 'left',
                fit: 'crop'
              }}
              htmlAttributes={{ alt: 'In Memory of Ginger', title: 'Ginger' }} />
          </div>
        </div>
      </>
    );
  }
}
