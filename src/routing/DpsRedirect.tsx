import * as React from 'react';

export interface IDpsRedirectProps {
  to: string;
}

export default class DpsRedirect extends React.PureComponent<IDpsRedirectProps> {

  public componentDidMount() {
    window.location.replace(this.props.to);
  }

  public render() {
    return (
      <div>
        Redirecting...
      </div>
    );
  }
}
