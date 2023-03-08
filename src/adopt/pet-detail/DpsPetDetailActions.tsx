import * as React from 'react';
import { Link } from 'react-router-dom';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import { routes } from '../../routing/routes';

export interface IDpsPetDetailActionsProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailActions extends React.PureComponent<IDpsPetDetailActionsProps> {
  public render() {
    const pet = this.props.pet;
    return (
      <div className="pet-detail-buttons">
        <span className="application-link"><Link to={pet.isDog ? `../${routes.adopt.children!.dogApp.path}` : `../${routes.adopt.children!.catApp.path}`}>Apply to adopt</Link></span>
        <span className="available-link"><Link to={`../${routes.adopt.children!.available.path}`}>See more {pet.species.toLocaleLowerCase()}s</Link></span>
      </div>
    );
  }
}
