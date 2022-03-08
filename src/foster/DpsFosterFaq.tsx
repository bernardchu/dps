import * as React from 'react'
import DpsFaq from '../common/DpsFaq';
import { IDpsFaqSection } from '../model/IDpsFaqSection';

export default class DpsFosterFaq extends React.PureComponent {
  private static sections: IDpsFaqSection[] = [
    {
      heading: "Why do we need fosters?",
      imgUrl: "https://dps-festive.imgix.net/images/foster/foster-melissa.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>DPS is a network of foster homes. Our dogs are never kenneled, but each one stays with a loving foster family until they can find their furever home! Our fosters enable us to rescue more dogs, they teach our animals what being in a home is like, they provide valuable information about the pups to potential adopters, and they advocate for their fosters by finding potential homes or just telling people about their awesome foster dogs.</p>
        <p className="application-link"><a href="https://docs.google.com/forms/d/1ydt01XnADgo9RsuC_m3gDFTTBS4ubaBqJ_OdXxqFkIY/viewform">Please Fill Out This Application to Get Started!</a></p>
      </>
    },
    {
      heading: "How long would I foster for?",
      imgUrl: "https://dps-festive.imgix.net/images/foster/foster-rachel.jpg?h=340&fit=crop&w=340&crop=top",
      prose: <p>We love to give our dogs stable foster homes so they can adjust and feel comfortable while awaiting adoption. We ask for a minimum of a two week foster commitment when you sign on to take a dog or puppy. Occasionally we are in need of short-term fosters (when other fosters go out of town, or in case of emergency), so if you're only able to keep for a few days, please feel free to fill out the application and join our team!</p>

    },
    {
      heading: "I’ve never had a dog before. Can I be a foster?",
      imgUrl: "https://dps-festive.imgix.net/images/foster/foster-foster.jpg?h=340&fit=crop&w=340",
      prose: <p>Yes! Fostering is a great way to learn about dogs...but you also need to do your homework! Before coming out to foster, read over some websites and prepare yourself and your home. Remove anything that a dog might chew on from the dog's reach. Plan out where the dog will eat and sleep. And be sure to let us know that this is your first experience with a dog so we can assign you an appropriate foster.</p>
    },
    {
      heading: "I’m thinking I might want to adopt soon. Can I foster-to-adopt?",
      imgUrl: "https://dps-festive.imgix.net/images/foster/foster-avery.jpg?h=340&fit=crop&w=340&crop=top",
      prose: <p>No&mdash;we do not allow foster to adopt. However, if you fall in love with a dog you are fostering, feel free to put in an application for that dog! Just know that we are getting and processing applications at all times and that dog might already be set up with an adopter. We do not give our fosters priority in the adoption process.</p>
    },
    {
      heading: "Do you have any additional foster resources?",
      imgUrl: "https://dps-festive.imgix.net/images/foster/faq/tips-for-getting-your-foster-pup-adopted.pdf?p=1&h=340&w=340&fit=crop&crop=top&pad=20&bg=A83F3B",
      prose: <>
        <p>Yes! The following links are available to all DPS foster homes to support you on our foster journey! If you have other questions or need further training resources, please email your requests to <a href="mailto:foster@dpsrescue.org">foster@dpsrescue.org</a>.</p>
        <ol>
          <li><strong><a href="https://dps-festive.imgix.net/images/foster/faq/tips-for-getting-your-foster-pup-adopted.pdf">Tips for Getting your Foster Dog Adopted</a>:</strong> This handout contains advice, tips and tricks for helping DPS to market your foster dog and find them the right forever home.</li>
          <br />
          <li><strong><a href="https://dps-festive.imgix.net/images/foster/faq/foster-enrichment-101.pdf">Enrichment 101</a>:</strong> We know that everyone works full time and can&apos;t spend hours and hours doing training every day. This handout has some fun ideas for keeping your foster dog mentally and physically stimulated. It&apos;s just as important to tire out their minds as their bodies, so supplement daily walks with these activities for a well-rounded and calm foster dog!</li>
          <br />
          <li><strong><a href="https://dps-festive.imgix.net/images/foster/faq/crate-training.pdf">Crate Training</a>:</strong> Crate training is highly recommended for all dogs and puppies! Here is a step-by-step guide to teaching your foster pup to love their crate.</li>
          <br />
          <li><strong><a href="https://dps-festive.imgix.net/images/foster/faq/dps-puppy-packet.pdf">Puppy Manual</a>:</strong> Puppies can be a tremendous amount of fun, but they can also be exhausting! This manual contains many activities you can engage in with your foster puppy. Puppies are in a crucial socialization period of their lives; follow these tips to help DPS adopt out well-rounded and social puppies who will thrive in their adoptive homes!</li>
          <br />
          <li><strong><a href="https://dps-festive.imgix.net/images/foster/faq/shy-dogs.pdf">Tips and Tricks for Shy Dogs</a> and <a href="https://dps-festive.imgix.net/images/foster/faq/treat-and-retreat.pdf">Treat and Retreat</a></strong></li>
        </ol>
      </>
    }
  ];

  public render() {
    return (
      <div className="row" >
        <DpsFaq sections={DpsFosterFaq.sections} />
      </div>
    );
  }
}
