import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';
import DpsApi from '../../api/DpsApi';
import { dpsBasicCarouselSettings } from '../../common/DpsBasicCarouselSettings';
import DpsSuccessStoryWrapper from '../../model/DpsSuccessStory';
import './successStory.module.scss';
import Imgix from 'react-imgix';
import DpsLoading from '../../common/DpsLoading';

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
    !pet && DpsApi.getSuccessStoryById(id!).then(p => {
      setPet(new DpsSuccessStoryWrapper(p));
      setLoaded(true);
    });
  }, [id, setPet, setLoaded, pet]);

  return (
    <div className="row success-story container">
      {!loaded && <DpsLoading />}
      {loaded && <>
        <h2 className="name">{pet.name}</h2>
        <div className="carousel col-xs-12 col-md-4">
          <Slider {...dpsBasicCarouselSettings as unknown as Settings}>
            {pet.photos.map(pic => <Imgix
              src={pic}
              htmlAttributes={{ alt: pet.name, title: pet.name }}
              key={pic}
              className="no-border"
              width={380} />)}
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
