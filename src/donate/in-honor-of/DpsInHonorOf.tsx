import * as React from 'react';
import Imgix from 'react-imgix';
import DpsApi from '../../api/DpsApi';
import { IDpsInHonorOfDonation, IDpsInHonorOfResponse } from '../../api/IDpsApiResponses';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import DpsInHonorOfTile from './DpsInHonorOfTile';
import './inHonorOf.scss';
import { donateEmail } from '../../common/DpsConstants';
import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes';

interface IDpsInHonorOfState extends IDpsAsyncState {
  donations: IDpsInHonorOfDonation[]
}

export default class DpsInHonorOf extends React.PureComponent<{}, IDpsInHonorOfState> {
  // Hard-coded for now until there's evidence that it warrants modified API behavior
  private static HUMAN_DONATIONS: IDpsInHonorOfDonation[] = [
    {
      imgSrc: 'https://dpsrescue.imgix.net/donate/in-honor-of/dennis.jpeg?w=380&h=350&fit=crop&crop=middle&border=15,2E8C69&border-bottom=80&mark-y=267&mark64=aHR0cHM6Ly9kcHNyZXNjdWUuaW1naXgubmV0L350ZXh0P3R4dC1jb2xvcj13aGl0ZSZ0eHQtZm9udDY0PVFYWmxibWx5SUU1bGVIUXNTWFJoYkdsaiZ0eHQtc2l6ZT0xNyZ3PTM2MCZ0eHQ2ND1TVzRnYldWdGIzSjVJRzltSUVSbGJtNXBjeUJLTGlCU2RXUnZiSEJvT2lCNWIzVWdkMmxzYkNCaVpTQnlaVzFsYldKbGNtVmtJR1p2Y2lCNWIzVnlJR3h2ZG1VZ2IyWWdZVzVwYldGc2N5NGdWMlVnVFdsemN5QlpiM1V1SUMwdFZHRmlMQ0JUWVcwc0lFTmhjbTlz',
      name: 'Dennis J. Rudolph',
      message: 'In memory of Dennis J. Rudolph: you will be remembered for your love of animals. We Miss You. -Tab, Sam, Carol'
    }
  ]

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
              Step 1: Submit your donation via one of the methods listed <Link to={`../${routes.donate.children!.donate.path}#monetary`}>here</Link><br />
              Step 2: Email <a href={`mailto:${donateEmail}`}>{donateEmail}</a> with a photo (if you'd like to submit one) and a message (ex: In memory of my beloved Fluffy, adopted in 2002)
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
          {DpsInHonorOf.HUMAN_DONATIONS.map(donation => <div className="in-honor-of-tile col-md-4 col-sm-6 col-xs-12" key={donation.imgSrc}>
            <DpsInHonorOfTile donation={donation} />
          </div>)}
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
