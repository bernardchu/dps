import * as React from 'react';
import { Timeline } from 'react-twitter-widgets';

export default class DpsTwitterContainer extends React.PureComponent {
  public render() {
    return (
      <div className="twitter-container card">
        <div className="twitter-embed">
          <Timeline dataSource={{
            sourceType: 'profile',
            screenName: 'DPSRescue'
          }}
          />
        </div>
      </div>
    );
  }
}
