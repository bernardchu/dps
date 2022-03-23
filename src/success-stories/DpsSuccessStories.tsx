import * as React from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DpsApi from '../api/DpsApi';
import DpsLoading from '../common/DpsLoading';
import { IDpsSuccessStoryCompact } from '../model/IDpsSuccessStory';
import { routes } from '../routing/routes';
import './successStories.scss';
import Imgix from 'react-imgix';

/**
 * Success stories is a strange route because it is a parent route that has content and it has
 * a child route that is not in the nav. In order to show just the parent or child content, we have
 * to switch between <Outlet /> and the parent content depending on which route we are actually in.
 */
export default function DpsSuccessStories() {
  const location = useLocation();
  const isSuccessStoryState = location.pathname.indexOf(routes.successStories.children!.successStory.path) > -1;

  const petState = useState<IDpsSuccessStoryCompact[]>();
  const stories: IDpsSuccessStoryCompact[] = petState[0] as IDpsSuccessStoryCompact[];
  const setStories = petState[1];

  const asyncState = useState<boolean>(false);
  const loaded: boolean = asyncState[0];
  const setLoaded = asyncState[1];

  React.useEffect(() => {
    DpsApi.getSuccessStories().then((successStories) => {
      setLoaded(true);
      setStories(successStories);
    });
    // [] below prevents infinite loop of calling useEffect, but including setLoaded and setStories as deps as the
    // linter suggests results in multiple calls to the API instead of 1. So the linter is disabled here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
    {isSuccessStoryState && <Outlet />}
    {!isSuccessStoryState && <div className="row success-stories">
      {!loaded && <DpsLoading />}
      {loaded && stories?.map(story =>
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 success-stories-dog" key={story.id}>
          <Link to={`${routes.successStories.children!.successStory.path}/?id=${story.id}`} className="img-container">
            <Imgix src={story.photo1} imgixParams={{ crop: 'faces,top', fit: 'crop' }} height={180} width={180} htmlAttributes={{ alt: story.name }} />
          </Link>
          <div className="name">{story.name}</div>
        </div>)}
    </div>}
  </>);
}
