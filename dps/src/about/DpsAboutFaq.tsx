import * as React from 'react';
import { Link } from 'react-router-dom';
import DpsFaq from '../common/DpsFaq';
import { IDpsFaqSection } from '../model/IDpsFaqSection';
import { routes } from '../routing/routes';

export default class DpsAboutFaq extends React.PureComponent {
  public render() {
    // cannot be static because "cannot access routes before initialization".
    const sections: IDpsFaqSection[] = [
      {
        heading: "Where does DPS get these dogs?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/sarah-chen.jpg?h=340&fit=crop&w=340",
        prose: <>
          <p>The majority of our dogs come from high kill animal shelters in Southern California and overflowing shelters in need of our help in Northern California. On occasion, we do get our dogs from owners who are unable to continue caring for their dogs.</p>
          <p>Our Korean and Chinese Rescue partnerships also allow us to save dogs around the world, which we are thankful for.</p>
        </>
      },
      {
        heading: "Where is the shelter/kennel?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/chen.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>We are not a shelter or a kennel. Our dogs are rescued from high kill shelters and then go into a network of foster homes in Northern CA, Southern CA and Las Vegas. Each dog lives with a family or person until they find their permanent home.</p>
      },
      {
        heading: "Why do the dogs come from Southern CA?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/george.png?h=340&fit=crop&w=340",
        prose: <>
          <p>Most of the dogs are rescued from shelters in Southern CA and initially go into foster homes there. When they have been vetted and behaviorally assessed we transfer them out to other foster homes in our other adoption areas. We do adoptions in Northern CA 3 times a month, Las Vegas 1-2 times a month, Arizona 4 times a year and in Southern CA on a regular basis. This allows us to take many more dogs and continue the life-saving work we have been doing for 10 years.</p>
          <p>We have found that each region has an affinity for different breeds of dogs. Whereas one breed may not find a home in Northern CA, they may be very sought out in Las Vegas and if we are willing to travel, the dog can find his/her home. Being mobile gives the opportunity for more lives to be saved.</p>
        </>
      },
      {
        heading: "What happens to the dogs that don't get adopted?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/zara.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>They stay with our rescue until they too find their home. You can check out some of our dogs who have been with us longer than others under our Sticky Dog section.</p>

      },
      {
        heading: "Do you have a \"trial period\" if I take a dog home?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/karen.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>As a rule, we do not have trial periods. If you take a dog home on a trial basis for a week or two and do not end up adopting, we have not been able to use that time to find that dog a permanent home. We don't think it's fair for the dog or for the other families that may want to adopt.</p>,

      },
      {
        heading: "What is the process for adopting a dog?",
        imgUrl: "http://dps-festive.imgix.net/images/about/faq/lily.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>Please look at our <Link to={`../../${routes.adopt.path}/${routes.adopt.children!.dogApp.path}`}>apply page</Link></p>,

      }
    ]

    return (
      <div className="row">
        <DpsFaq sections={sections} />
      </div>
    );
  }
}
