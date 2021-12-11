import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import DpsApi from '../../api/DpsApi';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsStickyDog } from '../../model/IDpsStickyDog';
import DpsStickyDogContent from './DpsStickyDogContent';
import './sticky.scss';

export interface IDpsStickyDogsState extends IDpsAsyncState {
  stickyDogs: IDpsStickyDog[]
}

export default class DpsStickyDogs extends React.Component<{}, IDpsStickyDogsState> {
  private static readonly carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    lazyLoad: true,
  }

  public componentDidMount() {
    DpsApi.getSticky()
      .then((stickyDogs) => {
        this.setState({
          stickyDogs: stickyDogs,
          loaded: true
        });
      }, (error) => {
        // TODO
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
        <div className="carousel-container col-xs-12">
          {!loaded && <div>Loading...</div>}
          {loaded && !stickyDogs?.length && <p>No sticky dogs right now, check back later!</p>}
          {loaded && !!stickyDogs?.length &&

            <div className="carousel card">
              <Slider {...DpsStickyDogs.carouselSettings as unknown as Settings}>
                {stickyDogs.map(dog => <DpsStickyDogContent dog={dog} key={dog.id} />)}
              </Slider>
            </div>
          }
        </div>
      </div>
    );
  }
}
