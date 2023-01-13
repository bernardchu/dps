import * as React from 'react'
import DpsFaq from '../common/DpsFaq';
import { imgixDomain } from '../common/DpsImgixDomain';
import { IDpsFaqSection } from '../model/IDpsFaqSection';

export default class DpsFosterFaq extends React.PureComponent {
  private static sections: IDpsFaqSection[] = [
    {
      heading: "Why do we need fosters?",
      imgUrl: "/foster/foster-melissa.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>DPS Rescue could not exist without our foster homes. Our dogs are never kept in a shelter or a kennel&#59; every dog stays with a loving foster family until they can find their furever home! Our fosters enable us to rescue more dogs, they teach our animals what being in a home is like, they provide valuable information about the pups to potential adopters, and they advocate for their fosters by networking them throughout their communities. The more foster homes we have, the more dogs we can rescue!</p>
        <p className="application-link"><a href="https://docs.google.com/forms/d/1ydt01XnADgo9RsuC_m3gDFTTBS4ubaBqJ_OdXxqFkIY/viewform">Click here to apply to foster dogs/puppies</a></p>
      </>
    },
    {
      heading: "How long would I foster for?",
      imgUrl: "/foster/foster-rachel.jpg?h=340&fit=crop&w=340&crop=top",
      prose: <p>We love to give our dogs stable foster homes so they can adjust and feel comfortable while awaiting adoption. We ask for a minimum of a two week foster commitment when you sign on to take a dog or puppy. Occasionally we are in need of short-term fosters (when other fosters go out of town, or in case of emergency), so if you're only able to keep for a few days, please feel free to fill out the application and join our team!</p>

    },
    {
      heading: "I’ve never had a dog before. Can I be a foster?",
      imgUrl: "/foster/foster-foster.jpg?h=340&fit=crop&w=340",
      prose: <p>Yes! Fostering is a great way to learn about dogs&hellip;but you also need to do your homework! Before coming out to foster, read over some websites and prepare yourself and your home. Remove anything that a dog might chew on from the dog's reach. Plan out where the dog will eat and sleep. Look over our Foster Resources section. Once you&#39;ve signed up, you can also join our Foster Facebook group to connect with other foster families and get advice and input. All of our fosters receive a phone call from our Foster Team before they begin, so write out a list of any questions you may have and we will be happy to answer them!</p>
    },
    {
      heading: "I’m thinking I might want to adopt soon. Can I foster-to-adopt?",
      imgUrl: "/foster/foster-avery.jpg?h=340&fit=crop&w=340&crop=top",
      prose: <>
        <p>No&mdash; our foster program is set up specifically for fostering, not foster-to-adopt. We do have some dogs in the rescue who are eligible for foster-to-adopt, and that will be listed on their bios. If you&#39;d like to go that route, please fill out an application for one of those dogs!</p>
        <p>If you sign up to foster and happen to fall in love with a dog you are fostering, you can absolutely put in an application for that dog! Just know that we are getting and processing applications at all times and that dog might already be set up with an adopter. We do not give our fosters priority in the adoption process, but your commitment to the rescue will of course be taken into account.</p>
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
