import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import DpsApi from '../api/DpsApi';
import DpsLoading from '../common/DpsLoading';
import { IDpsSuccessStoryCompact } from '../model/IDpsSuccessStory';
import { routes } from '../routing/routes';
import styles from './successStories.module.scss';
import Imgix from 'react-imgix';
import { useRouter } from 'next/router';

interface IDpsSuccessStoriesProps {
  stories: IDpsSuccessStoryCompact[];
}

export default class DpsSuccessStories extends React.PureComponent<IDpsSuccessStoriesProps> {
  public render() {
    const stories = this.props.stories;
    return (
      <div className={`row ${styles['success-stories']}`}>
        {stories?.map(story =>
          <div className={`col-xs-6 col-sm-4 col-md-3 col-lg-2 ${styles['success-stories-dog']}`} key={story.id}>
            <Link href={`${routes.successStories.children!.successStory.path}/?id=${story.id}`}>
              <a className="img-container">
                <Imgix src={story.photo1} imgixParams={{ crop: 'faces,top', fit: 'crop' }} height={180} width={180} htmlAttributes={{ alt: story.name }} />
              </a>
            </Link>
            <div className={styles.name}>{story.name}</div>
          </div>)}
      </div>);
  }
}
