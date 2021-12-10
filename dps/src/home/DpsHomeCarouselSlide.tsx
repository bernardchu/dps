import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsAdoptable } from '../model/IDpsAdoptable';

export interface IDpsHomeCarouselSlideProps {
  dog: IDpsAdoptable;
}

export default class DpsHomeCarouselSlide extends React.PureComponent<IDpsHomeCarouselSlideProps> {
  public render() {
    const dog = this.props.dog;
    return (
      <div className="adoptable-current">
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
    );
  }
}
