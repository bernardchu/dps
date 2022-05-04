import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import DpsDetailedPet from '../../model/DpsDetailedPet';
import { routes } from '../../routing/routes';
import DpsPetDetailBasics from './DpsPetDetailBasics';
import DpsPetDetailCarousel from './DpsPetDetailCarousel';
import DpsPetDetailHeading from './DpsPetDetailHeading';
import './pet-detail.module.scss'

/**
 * Shows details of one pet. A query param for id is used instead of a URL param (/pet-detail/?id=123 instead of /pet-detail/123)
 * for the sake of backwards compatibility.
 * Adding a query param print=true will render the page differently and add print media queries to facilitate printing pet bios
 * for adoption events.
 */
// useSearchParams necessitates function component over class component
export function DpsPetDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const print: boolean = searchParams.get('print') === 'true';

  const petState = useState<DpsDetailedPet>();
  const pet: DpsDetailedPet = petState[0] as DpsDetailedPet;
  const setPet = petState[1];

  const asyncState = useState<boolean>(false);
  const loaded: boolean = asyncState[0];
  const setLoaded = asyncState[1];

  React.useEffect(() => {
    !pet && DpsApi.getAvailableById(id!).then(p => {
      setPet(new DpsDetailedPet(p));
      setLoaded(true);
    });
  }, [id, setLoaded, setPet, pet]);

  return (
    <div className="row main">
      {!loaded && <DpsLoading />}
      {loaded &&
        <div className={`row pet-bio-container ${print ? 'col-sm-12' : 'col-sm-8'}`}>
          <div className={`col-xs-12 pet-bio ${print ? '' : 'card'}`}>
            {!print &&
              <div>
                <DpsPetDetailHeading pet={pet} />
                <div className="carousel-container"> {/* {{#if print}}col-sm-6{{/if}} was in here before but it should be logically impossible?*/}
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
      }
      {loaded && !print &&
        <div className="col-sm-4">
          <div className="card meet-this-dog">
            <h2>Meet this {pet.isDog ? 'dog' : 'cat'}!</h2>
            {pet.upcoming && <p className="upcoming">{pet.upcoming}</p>}
            {!pet.upcoming && <p className="upcoming">
              {pet.name} will not be at any scheduled events until we find a home that's
              interested. Please fill out an application if you think that's you!
            </p>}
            {pet.boilerplate.map(line => <p className="boilerplate" key={line} dangerouslySetInnerHTML={{ __html: line }} />)}
          </div>
          <div className="card apply">
            <h2>Interested in adopting?</h2>
            <p>Please read the <Link href={`../${routes.adopt.children!.dogApp.path}`}><a>adoption FAQ</a></Link>, then fill out the
              <Link href={pet.isDog ? `../${routes.adopt.children!.dogApp.path}` : `../${routes.adopt.children!.catApp.path}`}> <a>application</a></Link>
            </p>
          </div>
        </div>
      }
    </div>
  );
}

export default DpsPetDetail;
