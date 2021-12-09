import * as React from 'react';
import DpsApi from '../DpsApi';
import { IDpsAdoptable } from '../model/IDpsAnimal';
import { IDpsAvailableApiResponse } from '../model/IDpsAvailableApiResponse';
import Slider, { Settings } from "react-slick";
import _ from 'lodash';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DpsHomeCarouselSlide from './DpsHomeCarouselSlide';

export interface IDpsHomeCarouselState {
  loaded: boolean;
  dogs: IDpsAdoptable[];
}

export default class DpsHomeCarousel extends React.PureComponent<{}, IDpsHomeCarouselState> {
  private static settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    lazyLoad: true,
    adaptiveHeight: true
  };

  public componentDidMount() {
    fetch(DpsApi.availableCompact)
      .then((response: Response) => response.json())
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
        {!loaded && <div>Loading...</div>}
        {loaded && dogs?.length && <Slider {...DpsHomeCarousel.settings as unknown as Settings}>
          {dogs.map((dog: IDpsAdoptable) => <DpsHomeCarouselSlide dog={dog} key={dog.id} />)}
        </Slider>}
      </div>
    );
  }
}
