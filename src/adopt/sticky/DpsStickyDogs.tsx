import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import DpsApi from '../../api/DpsApi';
import { IDpsAvailableIdResponse } from '../../api/IDpsApiResponses';
import { dpsBasicCarouselSettings } from '../../common/DpsBasicCarouselSettings';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsStickyDog, IDpsStickyDogCompact } from '../../model/IDpsStickyDog';
import DpsStickyDogContent from './DpsStickyDogContent';
import './sticky.scss';

export interface IDpsStickyDogsState extends IDpsAsyncState {
  stickyDogs: IDpsStickyDog[]
}

/**
 * There have not been sticky dogs for a long time and there is no data served by the API to test against.
 * This is just a best attempt at working code based on legacy code.
 */
export default class DpsStickyDogs extends React.Component<{}, IDpsStickyDogsState> {
  public componentDidMount() {
    let stickiesCompact: IDpsStickyDogCompact[];
    DpsApi.getSticky()
      .then((stickyDogs: IDpsStickyDogCompact[]) => {
        stickiesCompact = stickyDogs;
        return Promise.all(stickyDogs.map(sticky => DpsApi.getAvailableById(sticky.id).then((expanded: IDpsAvailableIdResponse) => {
          return {
            pictures: expanded.pictures,
            bio: expanded.bio,
            ...sticky
          }
        })));
      })
      .then((stickies: IDpsStickyDog[]) => {
        this.setState({
          // Hack - no proper 404 on getAvailable so this is a surrogate
          stickyDogs: stickies.filter(sticky => sticky.bio),
          loaded: true
        });
      });
  }

  public render() {
    const stickyDogs = this.state?.stickyDogs;
    const loaded = this.state?.loaded;
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Sticky Dogs</h2>
          <p>Sticky Dogs are those who "stick around" a little longer than others. Perhaps they have medical issues,
            behavioral issues, social issues, are a little older or just for whatever reason have "stuck" around and need
            that extra love and attention to find their forever home. Some of these dogs also have a scholarship where
            someone has pledged a certain amount towards their normal adoption fee to aid in their getting adopted.</p>
          <p>Please check out some of our sticky dogs!</p>
        </div>
        <div className="row ">
          {!loaded && <DpsLoading />}
          {loaded && !stickyDogs?.length && <p>No sticky dogs right now, check back later!</p>}
          {loaded && !!stickyDogs?.length &&
            stickyDogs.map(dog => <div className="col-xs-12 card"><DpsStickyDogContent dog={dog} key={dog.id} /></div>)}
        </div>
      </div >
    );
  }
}
