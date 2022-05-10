import * as React from 'react';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import styles from './pet-detail.module.scss';

export interface IDpsPetDetailBasicsProps {
  pet: DpsDetailedPet
}

export default class DpsPetDetailBasics extends React.PureComponent<IDpsPetDetailBasicsProps> {
  public render() {
    const pet = this.props.pet;
    return (
      <div>
        {pet.declawed && <p className={styles.properties}>Declawed</p>}
        {pet.dogs && <p className={styles.properties}>Good with dogs</p>}
        {pet.cats && <p className={styles.properties}>Good with cats</p>}
        {pet.kids && <p className={styles.properties}>Good with kids</p>}
        {pet.housetrained && <p className={styles.properties}>Housetrained</p>}
      </div>
    );
  }
}
