import * as React from 'react';
import './donate.scss';
import Imgix from 'react-imgix';
import { routes } from '../../routing/routes';
import { IDpsRoute } from '../../model/IDpsRoutes';
import { Link } from 'react-router-dom';

export default class DpsDonate extends React.PureComponent {
  private static isDonateRoute(route: IDpsRoute): boolean {
    return /donate/i.test(route.name);
  }

  public render() {
    const donateRoutes = routes.donate.children!;
    const otherDonateRoutes: IDpsRoute[] = Object.keys(donateRoutes).map(key => donateRoutes[key]).filter(route => !DpsDonate.isDonateRoute(route));

    return (<>
      <div className="row donate">
        <div className="col-md-9 col-sm-12 prose">
          <h2>Donate</h2>
          As a non-profit organization with no government funding, we rely on donations to continue to rescue dogs and cats in need. The average cost per dog is $627, which includes bailing them out of the shelter, a health check, spay or neuter, vaccinations, microchipping and spending several weeks at a foster home to evaluate before adoption.  There are so many ways to donate!
        </div>
        <div className="col-md-3 hidden-sm hidden-xs">
          <Imgix src="http://dps-festive.imgix.net/images/donate/donate-header.png"
            width={300}
            htmlAttributes={{ alt: 'Mac' }} />
        </div>
        <div className="col-md-6 col-sm-12 prose">
          <p><strong>Monetary Donations</strong></p>
          <p>In addition to PayPal (the Donate button in the header), you can also donate via the following:</p>
          <ul>
            <li>Venmo (@DPSRescue)</li>
            <li>Zelle (info@dpsrescue.com)</li>
            <li>Checks to PO Box 1508, Romoland, CA 92585</li>
            <li><a href="https://smile.amazon.com/hz/charitylist/ls/339V2RUI5YY50" target="_blank" rel="noreferrer">Amazon Smile</a> (A portion of your Amazon spending is donated to DPS)</li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 prose">
          <p><strong>Items we need (please contact <a href="mailto:rachel@dpsrecue.com">rachel@dpsrecue.com</a> to schedule a drop-off!)</strong></p>
          <ul>
            <li>Canned dog &amp; cat food of any variety</li>
            <li>Newspaper</li>
            <li>Exercise pens</li>
            <li>Baby gates</li>
            <li>Gently used toys</li>
            <li>Blankets</li>
            <li>Dog beds​</li>
            <li>Flea Treatment (Frontline or Advantage)</li>
          </ul>
        </div>
        <div className="col-md-5 hidden-sm hidden-xs">
          <Imgix src="http://dps-festive.imgix.net/images/donate/donate-header.png" htmlAttributes={{ alt: 'Mac' }} />
        </div>
      </div>
      <hr />
      <div className="row donate">
        <h1>More Ways to Give</h1>
        <div className="sibling-tiles">
          {otherDonateRoutes.map(route => <Link className="donate-sibling-tile col-xs-12 col-sm-6 col-md-3" key={route.name} to={`../${route.path}`}>
            <Imgix src="http://dps-festive.imgix.net/images/logo-v2.png" width={400} />
            {route.name}
          </Link>)}
        </div>
      </div>
    </>
    );
  }
}
