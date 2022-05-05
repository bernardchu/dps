import * as React from 'react';
import { IDpsInHonorOfDonation } from '../../api/IDpsApiResponses';

export interface IDpsInHonorOfTileProps {
  donation: IDpsInHonorOfDonation
}

export default class DpsInHonorOfTile extends React.PureComponent<IDpsInHonorOfTileProps> {
  public render() {
    const { imgSrc, name, message } = this.props.donation;
    return (
      <img
        src={imgSrc}
        className="no-border"
        alt={`${name}: ${message}`}
        title={`${name}: ${message}`} />
    );
  }
}
