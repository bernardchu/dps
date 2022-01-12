import * as React from 'react';
import './donate.scss';

export default class DpsDonate extends React.PureComponent {
  public render() {
    return (
      <div className="row donate">
        <h2>Donate</h2>
        <div className="col-md-7 col-sm-12 prose">
          <p>As a non-profit, we rely on community donations to continue to save dogs and support those we already have. The average cost per dog to get them adoption ready is $467, which includes bailing them out of the shelter, a health check, spay or neuter surgery, vaccinations, microchipping and spending several weeks at a foster home to evaluate before adoption.</p>
          <p>If you would like to support our rescue, donations are always accepted. Donations can be made in the monetary form and they can be tangible items. Every penny helps.</p>
          <p><strong>Monetary Donations</strong></p>
          <p>Besides PayPal (the Donate button in the header), you can also donate via the following: </p>
          <ul>
            <li>Venmo (@DPSRescue)</li>
            <li>Zelle (info@dpsrescue.com)</li>
            <li>Checks to PO Box 1508, Romoland, CA 92585</li>
            <li><a href="https://smile.amazon.com/hz/charitylist/ls/339V2RUI5YY50" target="_blank" rel="noreferrer">Amazon Smile</a> (A portion of your Amazon spending is donated to DPS)</li>
          </ul>


          <p><strong>Items we need: </strong></p>
          <ul>
            <li>Canned food</li>
            <li>Newspaper</li>
            <li>Pens</li>
            <li>Baby gates</li>
            <li>Gently used toys</li>
            <li>Blankets</li>
            <li>Dog beds​</li>
            <li>Flea Treatment (Frontline or Advantage)</li>
          </ul>
        </div>
        <div className="col-md-5 hidden-sm hidden-xs">
          <img src="http://dps-festive.imgix.net/images/donate/donate-header.png" alt="Mac" />
        </div>
      </div>
    );
  }
}
