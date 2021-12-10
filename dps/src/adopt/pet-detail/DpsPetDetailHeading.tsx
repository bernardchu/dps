import * as React from 'react';
import { IDpsAvailableIdResponse } from '../../api/IDpsApiResponses';

export interface IDpsPetDetailHeadingProps {
  pet: IDpsAvailableIdResponse
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
