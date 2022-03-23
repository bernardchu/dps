import * as React from 'react';
import Imgix from 'react-imgix';
import { Link } from 'react-router-dom';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';

export interface IDpsHomeFeatureCardProps {
  feature: IDpsHomeFeatureCardData;
}

/**
 * The simplest form of these feature cards on the home page just has a title, some body text,
 * an image, and an internal route. External links can be provided as well, though it would look
 * strange probably to include both internal and external.
 * 
 * For fancier features, DOM elements can be specified directly in the feature data instead of
 * or in addition to the basic body text.
 */
export default class DpsHomeFeatureCard extends React.PureComponent<IDpsHomeFeatureCardProps> {
  public render() {
    const feature = this.props.feature;
    return (
      <div className="col-md-12 featured card">
        <h2>{feature.title}</h2>
        <hr />
        {feature.bodyText && <p>{feature.bodyText}</p>}
        {feature.body}
        <span className="featured_img">
          {feature.localPath && <Link to={feature.localPath}>
            <Imgix src={feature.imgSrc} />
          </Link>}
          {feature.externalLink && <a href={feature.externalLink}>
            <Imgix src={feature.imgSrc} />
          </a>}
        </span>
        <div>
          {feature.localPath && feature.linkText && <Link to={feature.localPath}>{feature.linkText}</Link>}
          {feature.externalLink && feature.linkText && <a href={feature.externalLink}>{feature.linkText}</a>}
        </div>
      </div>
    );
  }
}
