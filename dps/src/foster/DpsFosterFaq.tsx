import * as React from 'react'
import DpsFaqSection from '../common/DpsFaqSection';
import { IDpsFaqSection } from '../model/IDpsFaqSection';

export default class DpsFosterFaq extends React.PureComponent {
  private static sections: IDpsFaqSection[] = [
    {
      heading: "Why do we need fosters?",
      imgUrl: "http://dps-festive.imgix.net/images/foster/foster-melissa.jpg?h=340&fit=crop&w=340",
      prose: [
        '<p>DPS is a network of foster homes. Our dogs are never kenneled, but each one stays with a loving foster family until they can find their furever home! Our fosters enable us to rescue more dogs, they teach our animals what being in a home is like, they provide valuable information about the pups to potential adopters, and they advocate for their fosters by finding potential homes or just telling people about their awesome foster dogs.</p>',
        '<p class="application-link"><a href="https://docs.google.com/forms/d/1ydt01XnADgo9RsuC_m3gDFTTBS4ubaBqJ_OdXxqFkIY/viewform">Please Fill Out This Application to Get Started!</a></p>'
      ]
    },
    {
      heading: "How long would I foster for?",
      imgUrl: "http://dps-festive.imgix.net/images/foster/foster-rachel.jpg?h=340&fit=crop&w=340&crop=top",
      prose: [
        "<p>There are several types of fosters. The shortest is Saturday—Sunday, with pick-up in Palo Alto at 4:00 pm on Saturday and drop off Sunday morning at 11:00 am. One-week fostering starts with Sunday pick-up at 3:00 pm; drop off is the following Saturday at 10:30 am. Two-week fostering is the same times as one week, but lasts for 2 weeks. We also need emergency fosters mid-week. If you foster a dog for a night or a week and wish to continue fostering the same dog until adopted, great! We love to give our dogs stable foster homes so they can adjust and feel comfortable.</p>"
      ]
    },
    {
      heading: "I’ve never had a dog before. Can I be a foster?",
      imgUrl: "http://dps-festive.imgix.net/images/foster/foster-foster.jpg?h=340&fit=crop&w=340",
      prose: [
        "<p>Yes! Fostering is a great way to learn about dogs...but you also need to do your homework! Before coming out to foster, read over some websites and prepare yourself and your home. Remove anything that a dog might chew on from the dog's reach. Plan out where the dog will eat and sleep. And be sure to let us know that this is your first experience with a dog so we can assign you an appropriate foster.</p>"
      ]
    },
    {
      heading: "I’m thinking I might want to adopt soon. Can I foster-to-adopt?",
      imgUrl: "http://dps-festive.imgix.net/images/foster/foster-avery.jpg?h=340&fit=crop&w=340&crop=top",
      prose: [
        "<p>No&mdash;we do not allow foster to adopt. However, if you fall in love with a dog you are fostering, feel free to put in an application for that dog! Just know that we are getting and processing applications at all times and that dog might already be set up with an adopter. We do not give our fosters priority in the adoption process.</p>",
      ]
    }
  ];

  public render() {
    return (
      <div className="row" >
        <div className="faq">
          {DpsFosterFaq.sections.map((section: IDpsFaqSection, index: number) => {
            return <>
              <DpsFaqSection section={section} key={section.heading} />
              {index !== DpsFosterFaq.sections.length - 1 && <hr />}
            </>
          })}
        </div>
      </div>
    );
  }
}
