import * as React from 'react';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import styles from './icu.module.scss';

export interface IDpsIcuTileProps {
  animal: IDpsIcuAnimal;
  handleOpen: () => void;
}

export default class DpsIcuTile extends React.PureComponent<IDpsIcuTileProps> {
  public render() {
    const animal = this.props.animal;
    return (
      <div className={`${styles.dog} col-md-4 col-sm-6 col-xs-12`}
        onClick={this.props.handleOpen}>
        <img src={animal.photo} alt={animal.name} />
        <h4 className={styles.name}>{animal.name}</h4>
      </div>
    );
  }
}
