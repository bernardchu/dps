import * as React from 'react';
import DpsApi from '../../api/DpsApi';
import { IDpsAdoptable } from '../../model/IDpsAdoptable';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsAvailableApiResponse } from '../../api/IDpsApiResponses';
import DpsAdoptableTile from './DpsAdoptableTile';
import DpsLoading from '../../common/DpsLoading';

export interface IDpsAdoptAvailableState extends IDpsAsyncState {
  dogs: IDpsAdoptable[];
  cats: IDpsAdoptable[];
}

export default class DpsAdoptAvailable extends React.PureComponent<{}, IDpsAdoptAvailableState> {
  public componentDidMount() {
    DpsApi.getAvailableCompact()
      .then((animals: IDpsAvailableApiResponse) => {
        this.setState({
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
      <div className="row">
        <h2>Available Dogs</h2>
        <div className="dogs col-md-12">
          {!loaded && <DpsLoading />}
          {loaded && dogs.map(dog => <DpsAdoptableTile adoptable={dog} key={dog.id} />)}
        </div>
        <div className="clearfix"></div>
        <h2>Available Cats</h2>
        <div className="cats col-md-12">
          {!loaded && <DpsLoading />}
          {loaded && cats.map(cat => <DpsAdoptableTile adoptable={cat} key={cat.id} />)}
        </div>
      </div>
    );
  }
}
