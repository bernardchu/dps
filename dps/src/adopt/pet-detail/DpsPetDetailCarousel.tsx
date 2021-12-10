import * as React from 'react';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import Slider, { Settings } from "react-slick";

export interface IDpsPetDetailCarouselProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailCarousel extends React.PureComponent<IDpsPetDetailCarouselProps> {
  private static settings = {
    dots: true,
    infinite: true,
    speed: 300,
    lazyLoad: true,
  };

  public render() {
    const pet = this.props.pet;
    return (
      <div className="carousel">
        <Slider {...DpsPetDetailCarousel.settings as unknown as Settings}>
          {pet.pictures.map(pic => <img src={pic} alt={pet.name} title={pet.name} key={pic} />)}
          {pet.video && <iframe title={pet.name} width="560" height="400" src={pet.video} frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>}
        </Slider>
      </div>
    );
  }
}