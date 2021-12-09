import * as React from 'react';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';
import { routes } from '../routing/routes';
import DpsHomeFeatureCard from './DpsHomeFeatureCard';
import DpsTwitterContainer from './DpsTwitterContainer';

export default class DpsHomeSidebarFeatures extends React.PureComponent {

  public render() {
    // Sadly, features have to be initialized in render() because of a circular dependency with routes.
    const features: IDpsHomeFeatureCardData[] = [
      {
        title: 'Fly With DPS',
        bodyText: `Flying from ICN into SFO or LAX? Flying from PVG to SFO? DPS needs flight volunteers
        for our international dogs! No cost to you, we handle all the heavy lifting (dog included)
        and you save a life!`,
        localPath: `${routes.about.path}/${routes.about.children!.contact.path}`,
        imgSrc: 'http://dps-festive.imgix.net/images/home/flying-volunteers.jpg?fm=pjpg&w=700',
        linkText: 'Contact us if you can help out'
      }, {
        title: 'Get Involved',
        bodyText: `Like dogs? Want to help out in your community? Come volunteer or foster with DPS!`,
        localPath: `${routes.volunteer.path}/${routes.volunteer.children!.faq.path}`,
        imgSrc: 'http://dps-festive.imgix.net/images/home/events.jpg?w=700',
        linkText: 'Learn more about how you can help'
      }, {
        title: 'Fur-ever After',
        bodyText: `DPS has matched thousands of dogs with their perfect home over the
        past decade. Read our success stories and if you've adopted one of our
        pups, we'd love to hear from you!`,
        localPath: routes.successStories.path,
        imgSrc: 'http://dps-festive.imgix.net/images/home/success-stories.jpg?w=700',
        linkText: 'Read about our Happy Tails'
      }, {
        title: 'We ❤️ Pet Food Express!',
        bodyText: `Thank you to our partner, Pet Food Express, for hosting our adoption
        events in your stores! We couldn't save all of these dogs without you!`,
        externalLink: 'https://www.petfoodexpress.com/',
        imgSrc: 'http://dps-festive.imgix.net/images/home/pet-food-express.jpg?w=700',
        linkText: 'Find a PFE near you'
      }, {
        title: 'Our Favorite Doctors',
        bodyText: `Thank you to our vets, who help us keep all of our dogs healthy!`,
        body: <ul>
          <li><a href="https://www.perrisvetclinic.com/" target="_blank" rel="noreferrer">Perris
            Valley Animal Hospital</a></li>
          <li><a href="http://sanjosepetcare.com/" target="_blank" rel="noreferrer">Petcare
            Animal Hospital</a></li>
          <li><a href="http://www.alphapethospital.com/" target="_blank" rel="noreferrer">Dr.
            Peet at Alpha Animal Hospital</a></li>
        </ul>,
        externalLink: 'https://www.petfoodexpress.com/',
        imgSrc: 'http://dps-festive.imgix.net/images/home/vets.jpg?w=700'
      },
    ];

    return (
      <div className="col-md-4 col-sm-12 row">
        <div className="col-md-12">
          <DpsTwitterContainer />
          {features.map(feature => <DpsHomeFeatureCard feature={feature} key={feature.title} />)}
        </div>
      </div>
    );
  }
}
