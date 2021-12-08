import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsBasicFeature } from '../model/IDpsBasicFeature';

export interface IDpsBasicFeatureCardProps {
  feature: IDpsBasicFeature;
}

export default class DpsBasicFeatureCard extends React.PureComponent<IDpsBasicFeatureCardProps> {
  public render() {
    const feature = this.props.feature;
    return (
      <div className="featured card">
        <h2>{feature.title}</h2>
        <hr />
        <p>{feature.body}</p>
        <span className="featured_img">
          <Link to={feature.path}>
            <img src={feature.imgSrc} />
          </Link>
        </span>
        <div>
          <Link to={feature.path}>{feature.linkText}</Link>
        </div>
      </div>
    );
  }
}
