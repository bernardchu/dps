import * as React from 'react';
import Link from 'next/link';
import { IDpsAdoptable } from '../model/IDpsAdoptable';

export interface IDpsHomeCarouselSlideProps {
  dog: IDpsAdoptable;
}

export default class DpsHomeCarouselSlide extends React.PureComponent<IDpsHomeCarouselSlideProps> {
  public render() {
    const dog = this.props.dog;
    return (
      <div className="adoptable-current">
        <Link href={`adopt/pet-detail/?id=${dog.id}`}>
          <a>
            <img src={dog.imgUrl} title={dog.name} alt={dog.name} />
            <div className="adoptable-info-overlay">
              <div className="adoptable-info">
                <h3>{dog.name}</h3>
                <h4>{dog.gender} {dog.breed}</h4>
                <h4>{dog.age}</h4>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}
