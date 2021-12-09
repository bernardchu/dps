import * as React from 'react';
import DpsApi from '../../DpsApi';
import { IDpsAdoptable } from '../../model/IDpsAnimal';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsAvailableApiResponse } from '../../model/IDpsAvailableApiResponse';
import DpsAdoptableTile from './DpsAdoptableTile';
import './available.scss'

export interface IDpsAdoptAvailableState extends IDpsAsyncState {
  dogs: IDpsAdoptable[];
  cats: IDpsAdoptable[];
}

export default class DpsAdoptAvailable extends React.PureComponent<{}, IDpsAdoptAvailableState> {
  public componentDidMount() {
    fetch(DpsApi.availableCompact)
      .then((response: Response) => response.json())
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
    const cats = this.state?.cats;
    const loaded = this.state?.loaded;
    return (
      <div className="row">
        <h2>Available Dogs</h2>
        <div className="dogs col-md-12">
          {loaded && dogs.map(dog => <DpsAdoptableTile adoptable={dog} key={dog.id} />)}
        </div>
        <div className="clearfix"></div>
        <h2>Available Cats</h2>
        <div className="cats col-md-12">
          {loaded && cats.map(cat => <DpsAdoptableTile adoptable={cat} key={cat.id} />)}
        </div>
      </div>
    );
  }
}
