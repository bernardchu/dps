import * as React from 'react';
import './donateButton.scss';
import { donateLink } from './DpsConstants';

export default class DpsDonateButton extends React.PureComponent {
  public render() {
    return (
      <a className="donate-button" href={donateLink} target="_blank">Donate</a>
    );
  }
}
