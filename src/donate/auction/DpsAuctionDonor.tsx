import * as React from 'react';
import { IDpsAuctionDonor } from './DpsAuction';
import Imgix from 'react-imgix';
import './auction.scss'

export interface IDpsAuctionDonorProps extends IDpsAuctionDonor {
}

export default class DpsAuctionDonor extends React.PureComponent<IDpsAuctionDonorProps> {
  public render() {
    const { name, link, imgSrc } = this.props;
    return (
      <div className="donor col-md-2 col-sm-4 col-xs-6">
        <a href={link}>
          {imgSrc && <Imgix
            src={`donate/auction/${imgSrc}`}
            height={200}
            width={200}
            imgixParams={{
              'fit': 'fill',
              'fill': 'solid',
              'pad': 10
            }}
            htmlAttributes={{ alt: name, title: name }} />}
          <h4 className="name">{name}</h4>
        </a>
      </div>
    );
  }
}
