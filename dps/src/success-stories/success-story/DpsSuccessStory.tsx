import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';
import DpsApi from '../../api/DpsApi';
import { dpsBasicCarouselSettings } from '../../common/DpsBasicCarouselSettings';
import DpsSuccessStoryWrapper from '../../model/DpsSuccessStory';
import './successStory.scss';
import Imgix from 'react-imgix';

// useSearchParams necessitates function component over class component
export function DpsSuccessStory() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const petState = useState<DpsSuccessStoryWrapper>();
  const pet: DpsSuccessStoryWrapper = petState[0] as DpsSuccessStoryWrapper;
  const setPet = petState[1];

  const asyncState = useState<boolean>(false);
  const loaded: boolean = asyncState[0];
  const setLoaded = asyncState[1];

  React.useEffect(() => {
    DpsApi.getSuccessStoryById(id!).then(p => {
      setPet(new DpsSuccessStoryWrapper(p));
      setLoaded(true);
    });
    // [id] below prevents infinite loop of calling useEffect, but including setLoaded and setPet as deps as the
    // linter suggests results in 3 calls to the API instead of 1. So the linter is disabled here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="row success-story">
      {!loaded && <div>Loading...</div>}
      {loaded && <>
        <h2 className="name">{pet.name}</h2>
        <div className="carousel col-xs-12 col-md-4">
          <Slider {...dpsBasicCarouselSettings as unknown as Settings}>
            {pet.photos.map(pic => <Imgix src={pic} htmlAttributes={{ alt: pet.name, title: pet.name }} key={pic} width={380} />)}
          </Slider>
        </div>
        <div className="updates col-xs-12 col-md-8">
          {pet.updates.map(update => <React.Fragment key={update.date}>
            <h3>{update.date}</h3>
            <p dangerouslySetInnerHTML={{ __html: update.story }} />
          </React.Fragment>)}
        </div>
      </>}
    </div>
  );
}

export default DpsSuccessStory;
