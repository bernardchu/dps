import * as React from 'react';
import DpsApi from '../api/DpsApi';
import { IDpsAdoptable } from '../model/IDpsAdoptable';
import { IDpsAvailableApiResponse } from '../api/IDpsApiResponses';
import Slider, { Settings } from 'react-slick';
import _ from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './adoptableCarousel.scss';
import DpsHomeCarouselSlide from './DpsHomeCarouselSlide';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import DpsLoading from '../common/DpsLoading';

export interface IDpsHomeCarouselState extends IDpsAsyncState {
  dogs: IDpsAdoptable[];
}

export default class DpsHomeCarousel extends React.PureComponent<{}, IDpsHomeCarouselState> {
  private static readonly settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    lazyLoad: true,
    adaptiveHeight: true
  };

  public componentDidMount() {
    DpsApi.getAvailableCompact()
      .then((animals: IDpsAvailableApiResponse) => {
        this.setState({
          dogs: _.shuffle(animals.dogs),
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const loaded = this.state?.loaded;
    const dogs = this.state?.dogs;

    return (
      <div className="adoptable col-md-12">
        {!loaded && <DpsLoading />}
        {/* 
        Annoying type shenanigans below because the react-slick docs incorrectly say that
        lazyLoad should be 'progressive' or 'ondemand' when in fact it only works with a boolean.
        Unfortunately, the @types package follows the docs, so we have to convince it to accept
        the correct lazyLoad boolean.
        */}
        {loaded && dogs?.length && <Slider {...DpsHomeCarousel.settings as unknown as Settings}>
          {dogs.map((dog: IDpsAdoptable) => <DpsHomeCarouselSlide dog={dog} key={dog.id} />)}
        </Slider>}
      </div>
    );
  }
}
