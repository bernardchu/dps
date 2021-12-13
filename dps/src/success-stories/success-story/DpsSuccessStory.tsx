import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DpsApi from '../../api/DpsApi';
import { IDpsSuccessStory } from '../../model/IDpsSuccessStory';
import './successStory.scss';

// useSearchParams necessitates function component over class component
export function DpsSuccessStory() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const petState = useState<IDpsSuccessStory>();
  const pet: IDpsSuccessStory = petState[0] as IDpsSuccessStory;
  const setPet = petState[1];

  const asyncState = useState<boolean>(false);
  const loaded: boolean = asyncState[0];
  const setLoaded = asyncState[1];

  React.useEffect(() => {
    DpsApi.getSuccessStoryById(id!).then(p => {
      setPet(p);
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
