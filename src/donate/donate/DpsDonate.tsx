import * as React from 'react';
import Imgix from 'react-imgix';
import Link from 'next/link';
import { IDpsRoute } from '../../model/IDpsRoutes';
import { routes } from '../../routing/routes';
import styles from './donate.module.scss';

export default class DpsDonate extends React.PureComponent {
  private static isDonateRoute(route: IDpsRoute): boolean {
    return /donate/i.test(route.name);
  }

  public render() {
    const donateRoutes = routes.donate.children!;
    const otherDonateRoutes: IDpsRoute[] = Object.keys(donateRoutes).map(key => donateRoutes[key]).filter(route => !DpsDonate.isDonateRoute(route));

    return (<>
      <div className={`row ${styles.donate}`}>
        <div className={`col-md-9 col-sm-12 ${styles.prose}`}>
          <h2>Donate</h2>
          As a non-profit organization with no government funding, we rely on donations to continue to rescue dogs and cats in need. The average cost per dog is $627, which includes bailing them out of the shelter, a health check, spay or neuter, vaccinations, microchipping and spending several weeks at a foster home to evaluate before adoption.  There are so many ways to donate!
        </div>
        <div className="col-md-3 hidden-sm hidden-xs">
          <Imgix src="/donate/donate-header.png"
            width={300}
            className="no-border"
            htmlAttributes={{ alt: 'Mac' }} />
        </div>
        <div className={`col-md-6 col-sm-12 ${styles.prose}`}>
          <p><strong>Monetary Donations</strong></p>
          <p>In addition to PayPal (the Donate button in the header), you can also donate via the following:</p>
          <ul>
            <li>Venmo (@DPSRescue)</li>
            <li>Zelle (info@dpsrescue.com)</li>
            <li>Checks to PO Box 1508, Romoland, CA 92585</li>
            <li><a href="https://smile.amazon.com/hz/charitylist/ls/339V2RUI5YY50" target="_blank" rel="noreferrer">Amazon Smile</a> (A portion of your Amazon spending is donated to DPS)</li>
          </ul>
        </div>
        <div className={`col-md-6 col-sm-12 ${styles.prose}`}>
          <p><strong>Items we need (please contact <a href="mailto:rachel@dpsrescue.com">rachel@dpsrescue.com</a> to schedule a drop-off!)</strong></p>
          <ul>
            <li>Canned dog &amp; cat food of any variety</li>
            <li>Newspaper</li>
            <li>Exercise pens</li>
            <li>Baby gates</li>
            <li>Gently used toys</li>
            <li>Blankets</li>
            <li>Dog beds​</li>
            <li>Flea Treatment (Frontline or Advantage)</li>
            <li><a href="https://a.co/e0Fxj6f">Or check out our Amazon Wishlist</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={`row ${styles.donate}`}>
        <h1>More Ways to Give</h1>
        <div className={styles['sibling-tiles']}>
          {otherDonateRoutes.map(route => <Link key={route.name} href={`${route.path}`}>
            <a className={`${styles['donate-sibling-tile']} col-xs-6 col-md-3`} >
              <Imgix src="/donate/donate-paw-print.png" width={300} />
              {route.name}
            </a>
          </Link>)}
        </div>
      </div>
    </>
    );
  }
}
