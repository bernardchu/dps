import * as React from 'react';
import Link from 'next/link';
import { IDpsAdoptable } from '../../model/IDpsAdoptable';
import { routes } from '../../routing/routes';
import styles from './available.module.scss'

export interface IDpsAdoptableTileProps {
  adoptable: IDpsAdoptable
}

export default class DpsAdoptableTile extends React.PureComponent<IDpsAdoptableTileProps> {
  public render() {
    const adoptable = this.props.adoptable;
    return (
      <span className={`${styles.available} col-md-2 col-xs-4`}>
        <Link href={`${routes.adopt.children!.petDetail.path}/?id=${adoptable.id}`}>
          <a className="img-container"><img src={adoptable.imgUrl} alt={adoptable.name} /></a>
        </Link>
        <div className={styles.name}>{adoptable.name}</div>
        <div className={styles.breed}>{adoptable.breed}</div>
        <div className={styles.age}>{adoptable.age} - {adoptable.gender}</div>
      </span>
    );
  }
}
