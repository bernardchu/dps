import * as React from 'react';
import Imgix from 'react-imgix';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dpsBasicCarouselSettings } from '../../common/DpsBasicCarouselSettings';
import DpsSuccessStoryWrapper from '../../model/DpsSuccessStory';
import { IDpsSuccessStory } from '../../model/IDpsSuccessStory';
import styles from './successStory.module.scss';

interface IDpsSuccessStoryProps {
  story: IDpsSuccessStory;
}

export default class DpsSuccessStory extends React.PureComponent<IDpsSuccessStoryProps> {
  public render() {
    const story = new DpsSuccessStoryWrapper(this.props.story);

    return (
      <div className={`row ${styles['success-story']} container`}>
        <h2 className={styles.name}>{story.name}</h2>
        <div className={`${styles.carousel} col-xs-12 col-md-4`}>
          <Slider {...dpsBasicCarouselSettings as unknown as Settings}>
            {story.photos.map(pic => <Imgix
              src={pic}
              htmlAttributes={{ alt: story.name, title: story.name }}
              key={pic}
              className="no-border"
              width={380} />)}
          </Slider>
        </div>
        <div className={`${styles.updates} col-xs-12 col-md-8`}>
          {story.updates.map(update => <React.Fragment key={update.date}>
            <h3>{update.date}</h3>
            <p dangerouslySetInnerHTML={{ __html: update.story }} />
          </React.Fragment>)}
        </div>
      </div>
    );
  }
}