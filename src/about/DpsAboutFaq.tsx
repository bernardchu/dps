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
        imgUrl: "/about/faq/sarah-chen.jpg?h=340&fit=crop&w=340",
        prose: <>
          <p>The majority of our dogs come from high kill animal shelters in Southern California and overflowing shelters in need of our help in Northern California. On occasion, we do get our dogs from owners who are unable to continue caring for their dogs.</p>
          <p>Our Korean and Chinese Rescue partnerships also allow us to save dogs around the world, which we are thankful for.</p>
        </>
      },
      {
        heading: "Where is the shelter/kennel?",
        imgUrl: "/about/faq/chen.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>We do not have a shelter/kennel. Our dogs are rescued from high kill shelters and then go into a network of foster homes in Northern and Southern CA. Each dog lives with a family or person until they find their permanent home. We do have a warehouse facility called “The Safehouse&#59;” this is a location for intake, foster supply pickups, and adoption appointments. The Safehouse is not open for walk-ins at this time.</p>
      },
      {
        heading: "Do you adopt to homes outside of CA?",
        imgUrl: "/about/faq/george.png?h=340&fit=crop&w=340",
        prose: <p>Yes! We are happy to adopt to homes anywhere in the US (and even Canada!) as long as the adopter is able to travel to the Bay Area to adopt the dog in person. We do not ship our dogs.</p>
      },
      {
        heading: "What happens to the dogs that don't get adopted?",
        imgUrl: "/about/faq/zara.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>They stay with our rescue until they too find their home. You can check out some of our dogs who have been with us longer than others under our Sticky Dog section.</p>

      },
      {
        heading: "Do you have a \"trial period\" if I take a dog home?",
        imgUrl: "/about/faq/karen.jpg?h=340&fit=crop&w=340&crop=top",
        prose: <p>As a rule, we do not have trial periods. If you take a dog home on a trial basis for a week or two and do not end up adopting, we have not been able to use that time to find that dog a permanent home. We don't think it's fair for the dog or for the other families that may want to adopt.</p>,

      },
      {
        heading: "What is the process for adopting a dog?",
        imgUrl: "/about/faq/lily.jpg?h=340&fit=crop&w=340&crop=top",
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
