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
      <div className="donor col-md-4 col-sm-6 col-xs-12">
        <a href={link}>
          {imgSrc && <Imgix
            src={imgSrc}
            htmlAttributes={{ alt: name, title: name }} />}
          <h4 className="name">{name}</h4>
        </a>
      </div>
    );
  }
}
