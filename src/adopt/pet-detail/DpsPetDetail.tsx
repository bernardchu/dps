import Link from 'next/link';
import * as React from 'react';
import { IDpsAvailableIdResponse } from '../../api/IDpsApiResponses';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import { routes } from '../../routing/routes';
import DpsPetDetailBasics from './DpsPetDetailBasics';
import DpsPetDetailCarousel from './DpsPetDetailCarousel';
import DpsPetDetailHeading from './DpsPetDetailHeading';
import styles from './pet-detail.module.scss';

export interface IDpsPetDetailProps {
  pet: IDpsAvailableIdResponse;
  print: boolean
}

/**
 * Shows details of one pet. A query param for id is used instead of a URL param (/pet-detail/?id=123 instead of /pet-detail/123)
 * for the sake of backwards compatibility.
 * Adding a query param print=true will render the page differently and add print media queries to facilitate printing pet bios
 * for adoption events.
 */
export default class DpsPetDetail extends React.PureComponent<IDpsPetDetailProps> {
  public render() {
    const print = this.props.print;
    const pet = new DpsDetailedPet(this.props.pet);

    return (
      <div className="row main">

        <div className={`row ${styles['pet-bio-container']} ${print ? 'col-sm-12' : 'col-sm-8'}`}>
          <div className={`col-xs-12 ${styles['pet-bio']} ${print ? '' : 'card'}`}>
            {!print &&
              <div>
                <DpsPetDetailHeading pet={pet} />
                <div className={styles['carousel-container']}>
                  <DpsPetDetailCarousel pet={pet} />
                </div>
              </div>
            }
            {print &&
              <div>
                <img src={pet.pictures[0]} className="col-sm-6" alt={pet.name} />
                <div className="print-stats col-sm-6">
                  <DpsPetDetailHeading pet={pet} />
                  <DpsPetDetailBasics pet={pet} />
                </div>
                <div className="clearfix"></div>
                <hr />
              </div>
            }
            {!print && <DpsPetDetailBasics pet={pet} />}
            {pet.bio?.map(line => <p className="bio" key={line} dangerouslySetInnerHTML={{ __html: line }} />)} {/* To properly parse escaped quotes and such */}
          </div>

        </div>

        {!print &&
          <div className="col-sm-4">
            <div className={`card ${styles['meet-this-dog']}`}>
              <h2>Meet this {pet.isDog ? 'dog' : 'cat'}!</h2>
              {pet.upcoming && <p className="upcoming">{pet.upcoming}</p>}
              {!pet.upcoming && <p className="upcoming">
                {pet.name} will not be at any scheduled events until we find a home that's
                interested. Please fill out an application if you think that's you!
              </p>}
              {pet.boilerplate.map(line => <p className={styles.boilerplate} key={line} dangerouslySetInnerHTML={{ __html: line }} />)}
            </div>
            <div className={`card ${styles.apply}`}>
              <h2>Interested in adopting?</h2>
              <p>Please read the&nbsp;
                <Link href={`../${routes.adopt.children!.dogApp.path}`}>
                  <a>adoption FAQ</a>
                </Link>
                , then fill out the&nbsp;
                <Link href={pet.isDog ? `../${routes.adopt.children!.dogApp.path}` : `../${routes.adopt.children!.catApp.path}`}>
                  <a>application</a>
                </Link>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}
