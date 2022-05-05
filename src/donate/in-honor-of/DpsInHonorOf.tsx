import * as React from 'react';
import Imgix from 'react-imgix';
import DpsApi from '../../api/DpsApi';
import { IDpsInHonorOfDonation, IDpsInHonorOfResponse } from '../../api/IDpsApiResponses';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import DpsInHonorOfTile from './DpsInHonorOfTile';
import styles from './inHonorOf.module.scss';

interface IDpsInHonorOfState extends IDpsAsyncState {
  donations: IDpsInHonorOfDonation[]
}

export default class DpsInHonorOf extends React.PureComponent<{}, IDpsInHonorOfState> {
  public componentDidMount() {
    DpsApi.getInHonorOf()
      .then((donations: IDpsInHonorOfResponse) => {
        this.setState({
          donations,
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const loaded = this.state?.loaded;
    const donations = this.state?.donations;
    return (
      <>
        <div className="row in-honor-of">
          <div className="col-md-8 col-sm-12">
            <h1>In Honor Of</h1>
            <p>Honor a human or furry loved one with a tribute to them.</p>
            <p>
              Step 1: Submit your donation through Venmo (@DPSRescue) or Zelle (info@dpsrescue.com)<br />
              Step 2: Email <a href="mailto:rachel@dpsrescue.com">rachel@dpsrescue.com</a> with a photo (if you'd like to submit one) and a message (ex: In memory of my beloved Fluffy, adopted in 2002)
            </p>
            <p>Your photo and message can be posted on our social media, a page of our website or we can send an individual note. You get to choose how you'd like your pet to be remembered. We know the importance of pets and how essential it is to celebrate both our pets and the humans in our lives.</p>
          </div>
          <div className="col-md-4 hidden-sm hidden-xs image">
            <Imgix
              src="donate/in-honor-of/Yoda.png"
              className="no-border"
              htmlAttributes={{ alt: 'Yoda 2001-2020', title: 'Yoda 2001-2020' }} />
          </div>
        </div>
        <hr />
        <div className="row in-honor-of">
          {!loaded && <DpsLoading />}
          {loaded && donations.map(donation => <div className="in-honor-of-tile col-md-4 col-sm-6 col-xs-12" key={donation.imgSrc}>
            <DpsInHonorOfTile donation={donation} />
          </div>)}
        </div>
      </>
    );
  }
}
