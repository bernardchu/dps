import * as React from 'react';
import './loading.scss';

export default class DpsLoading extends React.PureComponent {
  public render() {
    return (
      // source: https://loading.io/css/ (CC0 license)
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    );
  }
}
