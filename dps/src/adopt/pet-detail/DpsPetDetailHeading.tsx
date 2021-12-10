import * as React from 'react';
import DpsDetailedPet from '../../model/DpsDetailedPet';

export interface IDpsPetDetailHeadingProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailHeading extends React.PureComponent<IDpsPetDetailHeadingProps> {
  public render() {
    const pet = this.props.pet;
    return (
      <div>
        <h2>{pet.name}</h2>
        <p className="breed">{pet.breed}</p>
        <p className="stats">{pet.age} - {pet.coat_length} coat - {pet.gender}</p>
      </div>
    );
  }
}
