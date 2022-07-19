import * as React from 'react';
import { routes } from '../../routing/routes';
import { Link } from 'react-router-dom';
import { IDpsStickyDog } from '../../model/IDpsStickyDog';

export interface IDpsStickyDogContentProps {
  dog: IDpsStickyDog;
}

export default class DpsStickyDogContent extends React.PureComponent<IDpsStickyDogContentProps> {
  public render() {
    const dog = this.props.dog;
    return (
      <div className="sticky-dog row">
        <div className="col-md-6 left row">
          <Link to={`../${routes.adopt.children!.petDetail.path}/?id=${dog.id}}`} className="col-xs-12">
            <img src={dog.pictures[0]} alt={dog.name} title={dog.name} className="no-border" />
          </Link>
          <hr className="hidden-sm hidden-xs" />
          <div className="paypal col-xs-12 row">
            <div className="">
              {dog.donors && <>
                <p>Part of {dog.name}&lsquo;s adoption fee has been generously donated, thanks to {dog.donors}!</p>
                <p>{dog.name}&lsquo;s adoption fee is now {dog.adoption_fee}.</p>
              </>}
              <p>Help {dog.name} find a fur-ever home faster by sponsoring part of the adoption fee.</p>
            </div>
            {/* <div className="paypal-button" dangerouslySetInnerHTML={{ __html: dog.paypal }} /> */}
          </div>
        </div>
        <div className="right col-md-6 row">
          <h3>{dog.name}</h3>
          <div className="bio col-xs-12">
            {dog.bio?.map(line => <p className="bio" key={line} dangerouslySetInnerHTML={{ __html: line }} />)} {/* To properly parse escaped quotes and such */}
          </div>
        </div>
      </div>
    );
  }
}
