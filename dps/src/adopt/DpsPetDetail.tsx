import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DpsApi from '../api/DpsApi';
import { IDpsAvailableIdResponse } from '../api/IDpsApiResponses';

// useSearchParams necessitates function component over class component
export function DpsPetDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const print: boolean = searchParams.get('print') === 'true';

  const petState = useState<IDpsAvailableIdResponse>();
  const pet: IDpsAvailableIdResponse = petState[0] as IDpsAvailableIdResponse;
  const setPet = petState[1];

  const asyncState = useState<boolean>(false);
  const loaded: boolean = asyncState[0];
  const setLoaded = asyncState[1];

  React.useEffect(() => {
    DpsApi.getAvailableById(id!).then(p => {
      setPet(p);
      setLoaded(true);
    });
  }, []);

  return (
    <div className="row main">
      {!loaded && <div>Loading...</div>}
      {loaded && pet?.name}
    </div>
  );
}

export default DpsPetDetail;
