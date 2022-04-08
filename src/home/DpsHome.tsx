import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';
import { routes } from '../routing/routes';
import DpsHomeCarousel from './DpsHomeCarousel';
import DpsHomeEvents from './DpsHomeEvents';
import DpsHomeFeatureCard from './DpsHomeFeatureCard';
import DpsHomeSidebarFeatures from './DpsHomeSidebarFeatures';

export default class DpsHome extends React.PureComponent {
  private static merchFeature: IDpsHomeFeatureCardData = {
    title: 'Get DPS Merchandise at Our Online Store',
    externalLink: 'https://www.bonfire.com/store/dpsrescue/',
    imgSrc: '/home/merch.png?auto=format&pad=20&bg=2E8C69',
  }

  private static aboutFeature: IDpsHomeFeatureCardData = {
    title: 'Who We Are',
    imgSrc: '',
    body: <div><p>Doggie Protective Services, better known as DPS Rescue, was founded in 2001. We are a 501(c)(3) nonprofit organization that rescues dogs and cats of all ages, sizes, and breeds from throughout the state of California, with a base in the Bay Area. But many of our animals are rescued in So Ca. We do not have a shelter facility and all of our dogs live in foster homes from intake through adoption. We do not receive any government funding and rely 100% on donations from our supporters and our community in order to save lives.</p>
    <p>We specialize in rescuing those that may be at risk of euthanasia, including pregnant and nursing mama dogs, medical cases, and the shy and shut down pups who do not thrive in the shelter environment.</p>
    <p>We don’t just rescue dogs! We also have a team that rescues cats and kittens, including bottle babies and nursing mama cats, and cares for them until they are old enough to be adopted.</p>
    <p>We hold biweekly Saturday meet and greet events from 12-3 pm at Pet Food Express in Palo Alto and host individual adoptions throughout the week by appointment. We welcome adopters from Northern CA and beyond; as long as you can come in person to meet and adopt your new family member, you’re more than welcome to adopt from DPS!</p>
    <p>We are always in need of more foster homes and volunteers! Click <a href="/foster">here</a> to sign up to become a lifesaving foster home or <a href="/volunteer">here</a> to sign up to volunteer at our events, to join our transport team, or to learn other ways you can support DPS!</p>
    </div>
  }

  public render() {
    return (
      <>
        <div className="row">
          <div className="adoptable col-md-12 container">
            <DpsHomeCarousel />
            <Link to={`${routes.adopt.path}/${routes.adopt.children!.available.path}`} className="hero-button col-xs-12">See All
              Available Dogs and Cats</Link>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 row features">
          <DpsHomeEvents />
          <DpsHomeFeatureCard feature={DpsHome.merchFeature} />
	  <DpsHomeFeatureCard feature={DpsHome.aboutFeature} />
        </div>
        <div className="col-md-4 col-sm-12 row">
          <DpsHomeSidebarFeatures />
        </div>
      </>

    );
  }
}
