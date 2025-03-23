import * as React from 'react';
import './donateButton.scss';
import { donateLink } from './DpsConstants';

interface IDpsDonateButtonProps {
  link?: string;
}

export default class DpsDonateButton extends React.PureComponent<IDpsDonateButtonProps> {
  public render() {
    const link = this.props.link;
    return (
      <a className="donate-button" href={link || donateLink} target="_blank">Donate</a>
    );
  }
}
