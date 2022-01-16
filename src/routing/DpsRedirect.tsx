import * as React from 'react';

export interface IDpsRedirectProps {
  to: string;
}

export default class DpsRedirect extends React.PureComponent<IDpsRedirectProps> {

  public render() {
    window.location.replace(this.props.to);
    return (
      <div>
        Redirecting...
      </div>
    );
  }
}
