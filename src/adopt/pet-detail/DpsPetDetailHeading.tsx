import * as React from 'react';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import styles from './pet-detail.module.scss';

export interface IDpsPetDetailHeadingProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailHeading extends React.PureComponent<IDpsPetDetailHeadingProps> {
  public render() {
    const pet = this.props.pet;
    return (
      <>
        <h2>{pet.name}</h2>
        <p className={styles.breed}>{pet.breed}</p>
        <p className={styles.stats}>{pet.age} - {pet.coat_length} coat - {pet.gender}</p>
      </>
    );
  }
}
