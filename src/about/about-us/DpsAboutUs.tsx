import * as React from 'react';
import './aboutUs.scss';
import Imgix from 'react-imgix';

export default class DpsAboutUs extends React.PureComponent {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12 group-photo">
          <Imgix src="http://dps-festive.imgix.net/images/about/about-group.jpg" htmlAttributes={{ alt: 'Group of volunteers' }} />
        </div>
        <div className="col-xs-12">
          <p>Doggie Protective Services is a non-profit, volunteer-driven, animal
            rescue organization. We are a 501(c)(3) rescue that was incorporated in
            2001. We rescue dogs of all breeds, ages, and sizes. Since our creation,
            we have helped over 12,000 dogs and cats find their forever homes.</p>

          <p>We do not have a facility, so we rely on our foster homes located
            throughout California. Anywhere from 100-200 foster homes are active at
            various times in some capacity, whether they are long-term, short-term or
            overnight fosters. Most of our fosters are also involved beyond just
            fostering - they come to events, transport our animals, do post-adoption
            outreach and help spread the word about DPS!</p>

          <p>We also rely heavily on volunteers, and are lucky enough to have a
            supportive group of dedicated friends who help assist in everything from
            writing bios for dogs to promoting them on their own social media to help
            them get adopted!</p>

          <p>While our name may be Doggie Protective Services, we also rescue cats as
            well! We have a small, vibrant group of cat fosters who take in our rescue
            cats and kittens. For cat owners requesting re-homing assistance, we also
            assist if they can foster their own cat while we work to find a perfect
            forever home.</p>

          <p>Approximately 30 shelters throughout Southern and Northern California
            partner with us in our rescue efforts. We are contacted by shelters and
            asked to help with overpopulation by taking in specific dogs who otherwise
            may not be adopted or who have been at the shelter for an extended period
            of time. We take in dogs who do not thrive in a shelter environment or who
            need medical or behavioral attention outside of the facility.</p>

          <p>Our partnership with a rescue group in Korea helps us fully realize the
            impact of a highly dedicated, global network of volunteers. Our Korean
            rescue partners save dogs who are sold to the meat markets or who are in
            danger of ending up at the meat markets. We also have a partnership with a
            rescue in China who sends us dogs she would not be able to place in her
            country. It is our strong belief that because we have the resources and
            the ability to save highly adoptable dogs from certain death, that we
            should do so. It doesn't matter if the dogs in need are in the Bay Area,
            LA, or as far away as Korea. Our philosophy is simple: If there is a need,
            and we can and want to assist, then we will.​</p>

          <p>Our Tax ID is 91-2164578.</p>
        </div>
      </div>
    );
  }
}