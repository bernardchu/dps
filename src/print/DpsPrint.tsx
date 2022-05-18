import * as React from 'react';
import Link from 'next/link';
import DpsApi from '../api/DpsApi';
import { IDpsAvailableApiResponse } from '../api/IDpsApiResponses';
import DpsLoading from '../common/DpsLoading';
import { IDpsAdoptable } from '../model/IDpsAdoptable';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import { routes } from '../routing/routes';
import DpsImmediateAsyncComponent from '../common/DpsImmediateAsyncComponent';

export interface IDpsPrintAvailableState extends IDpsAsyncState {
  dogs: IDpsAdoptable[];
  cats: IDpsAdoptable[];
}

export default class DpsPrint extends DpsImmediateAsyncComponent<{}, IDpsPrintAvailableState> {
  public componentDidMount() {
    this._isMounted = true;
    DpsApi.getAvailableCompact()
      .then((animals: IDpsAvailableApiResponse) => {
        this._isMounted && this.setState({
          dogs: animals.dogs,
          cats: animals.cats,
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const dogs = this.state?.dogs;
    dogs?.sort((a, b) => a.name > b.name ? 1 : -1);
    const cats = this.state?.cats;
    cats?.sort((a, b) => a.name > b.name ? 1 : -1);
    const loaded = this.state?.loaded;
    return (
      <div>
        <div className="row">
          <h2>Available Dogs</h2>
          <div className="dogs col-md-12">
            {!loaded && <DpsLoading />}
            {loaded && dogs.map(dog => <React.Fragment key={dog.id}>
              <p>{dog.name}&nbsp;<Link href={`../${routes.adopt.path}/${routes.adopt.children!.petDetail.path}/?id=${dog.id}&print=true`}><a>print</a></Link></p>
            </React.Fragment>)}
          </div>
          <div className="clearfix"></div>
          <h2>Available Cats</h2>
          <div className="cats col-md-12">
            {!loaded && <DpsLoading />}
            {loaded && cats.map(cat => <React.Fragment key={cat.id}>
              <p>{cat.name}&nbsp;<Link href={`../${routes.adopt.path}/${routes.adopt.children!.petDetail.path}/?id=${cat.id}&print=true`}><a>print</a></Link></p>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    );
  }
}
