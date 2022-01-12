import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsAdoptable } from '../../model/IDpsAdoptable';
import { routes } from '../../routing/routes';

export interface IDpsAdoptableTileProps {
  adoptable: IDpsAdoptable
}

export default class DpsAdoptableTile extends React.PureComponent<IDpsAdoptableTileProps> {
  public render() {
    const adoptable = this.props.adoptable;
    return (
      <span className="available col-md-2 col-xs-4">
        <Link to={`../${routes.adopt.children!.petDetail.path}/?id=${adoptable.id}`} className="img-container">
          <img src={adoptable.imgurl} alt={adoptable.name} />
        </Link>
        <div className="name">{adoptable.name}</div>
        <div className="breed">{adoptable.breed}</div>
        <div className="age">{adoptable.age} - {adoptable.gender}</div>
      </span>
    );
  }
}