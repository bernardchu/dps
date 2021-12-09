import * as React from 'react';
import DpsApi from '../DpsApi';
import { IDpsAdoptable } from '../model/IDpsAnimal';
import { IDpsAvailableApiResponse } from '../model/IDpsAvailableApiResponse';
import Slider, { Settings } from "react-slick";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IDpsHomeCarouselState {
  loaded: boolean;
  dogs: IDpsAdoptable[];
}

export default class DpsHomeCarousel extends React.Component<{}, IDpsHomeCarouselState> {
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

        {loaded && dogs?.length && <Slider {...DpsHomeCarousel.settings as unknown as Settings}>
          {dogs.map((dog: IDpsAdoptable) => {
            return <div className="adoptable-current" key={dog.id}>
              <Link to={`adopt/pet-detail/?id=${dog.id}`}>
                <img src={dog.imgurl} title={dog.name} alt={dog.name} />
                <div className="adoptable-info-overlay">
                  <div className="adoptable-info">'
                    <h3>{dog.name}</h3>
                    <h4>{dog.gender} {dog.breed}</h4>
                    <h4>{dog.age}</h4>
                  </div>
                </div>
              </Link>
            </div>
          })
          }
        </Slider>}
      </div>
    );
  }
}
