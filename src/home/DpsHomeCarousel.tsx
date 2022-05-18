import _ from 'lodash';
import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import DpsApi from '../api/DpsApi';
import { IDpsAvailableApiResponse } from '../api/IDpsApiResponses';
import DpsImmediateAsyncComponent from '../common/DpsImmediateAsyncComponent';
import DpsLoading from '../common/DpsLoading';
import { IDpsAdoptable } from '../model/IDpsAdoptable';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import DpsHomeCarouselSlide from './DpsHomeCarouselSlide';

export interface IDpsHomeCarouselState extends IDpsAsyncState {
  dogs: IDpsAdoptable[];
}

export default class DpsHomeCarousel extends DpsImmediateAsyncComponent<{}, IDpsHomeCarouselState> {
  private static readonly settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    lazyLoad: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 840, // weirdly arbitrary number but at this point it's just a bit too wide for two slides
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  public componentDidMount() {
    this._isMounted = true;
    DpsApi.getAvailableCompact()
      .then((animals: IDpsAvailableApiResponse) => {
        this._isMounted && this.setState({
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

    return (<>
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
    </>
    );
  }
}
