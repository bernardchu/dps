import * as React from 'react';

export default class DpsTwitterContainer extends React.PureComponent {
  public render() {
    return (
      <div className="twitter-container card">
        <div className="twitter-embed">
          <a className="twitter-timeline" data-width="800" data-theme="light"
            href="https://twitter.com/DPSRescue?ref_src=twsrc%5Etfw">Tweets
            by DPSRescue</a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
    );
  }
}
