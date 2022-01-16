import * as React from 'react';
import DpsDetailedPet from '../../model/DpsDetailedPet';

export interface IDpsPetDetailBasicsProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailBasics extends React.PureComponent<IDpsPetDetailBasicsProps> {
  public render() {
    const pet = this.props.pet;
    return (
      <div>
        {pet.declawed && <p className="properties">Declawed</p>}
        {pet.dogs && <p className="properties">Good with dogs</p>}
        {pet.cats && <p className="properties">Good with cats</p>}
        {pet.kids && <p className="properties">Good with kids</p>}
        {pet.housetrained && <p className="properties">Housetrained</p>}
      </div>
    );
  }
}
