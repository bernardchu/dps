import * as React from 'react';
import { IDpsBasicFeature } from '../model/IDpsBasicFeature';
import DpsBasicFeatureCard from './DpsBasicFeatureCard';
import DpsTwitterContainer from './DpsTwitterContainer';

export default class DpsFeatures extends React.PureComponent {
  private static features: IDpsBasicFeature[] = [
    {
      title: 'Fly With DPS',
      body: `Flying from ICN into SFO or LAX? Flying from PVG to SFO? DPS needs flight volunteers
      for our international dogs! No cost to you, we handle all the heavy lifting (dog included)
      and you save a life!`,
      path: 'about/contact',
      imgSrc: 'http://dps-festive.imgix.net/images/home/flying-volunteers.jpg?fm=pjpg&w=700',
      linkText: 'Contact us if you can help out'
    }, {
      title: 'Get Involved',
      body: `Like dogs? Want to help out in your community? Come volunteer or foster with DPS!`,
      path: 'volunteer',
      imgSrc: 'http://dps-festive.imgix.net/images/home/events.jpg?w=700',
      linkText: 'Learn more about how you can help'
    }, {
      title: 'Fur-ever After',
      body: `DPS has matched thousands of dogs with their perfect home over the
      past decade. Read our success stories and if you've adopted one of our
      pups, we'd love to hear from you!`,
      path: 'success-stories',
      imgSrc: 'http://dps-festive.imgix.net/images/home/success-stories.jpg?w=700',
      linkText: 'Read about our Happy Tails'
    },
  ];

  public render() {
    return (
      <div className="col-md-4 col-sm-12 row">
        <div className="col-md-12">
          <DpsTwitterContainer />
          {DpsFeatures.features.map(feature => <DpsBasicFeatureCard feature={feature} />)}

          <div className="featured card">
            <h2>We ❤️ Pet Food Express!</h2>
            <hr />
            <p>Thank you to our partner, Pet Food Express, for hosting our adoption
              events in your stores! We couldn't save all of these dogs without
              you!</p>
            <span className="featured_img">
              <a href="https://www.petfoodexpress.com/">
                <img src="http://dps-festive.imgix.net/images/home/pet-food-express.jpg?w=700" />
              </a>
            </span>
            <div>
              <a href="https://www.petfoodexpress.com/" target="_blank">Find a PFE
                near you</a>
            </div>
          </div>

          <div className="featured card">
            <h2>Our Favorite Doctors</h2>
            <hr />
            <p>Thank you to our vets, who help us keep all of our dogs healthy!</p>
            <ul>
              <li><a href="https://www.perrisvetclinic.com/" target="_blank">Perris
                Valley Animal Hospital</a></li>
              <li><a href="http://sanjosepetcare.com/" target="_blank">Petcare
                Animal Hospital</a></li>
              <li><a href="http://www.alphapethospital.com/" target="_blank">Dr.
                Peet at Alpha Animal Hospital</a></li>
            </ul>
            <span className="featured_img">
              <a href="https://www.petfoodexpress.com/">
                <img src="http://dps-festive.imgix.net/images/home/vets.jpg?w=7\00" />
              </a>
            </span>
          </div>

        </div>
      </div>
    );
  }
}
