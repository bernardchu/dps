import * as React from 'react';
import DpsFaq from '../common/DpsFaq';
import { IDpsFaqSection } from '../model/IDpsFaqSection';
import './volunteerFaq.scss';
import Imgix from 'react-imgix';

export default class DpsVolunteerFaq extends React.PureComponent {
  private static sections: IDpsFaqSection[] = [
    {
      heading: "How can I volunteer?",
      imgUrl: "/volunteer/volunteer-tanner.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>Thanks for asking! Our organization is powered by volunteers like you! We ask that folks have a love for dogs and a willingness to work with a diverse group of people. Our volunteer opportunities include assisting at adoptions events, transporting dogs, fundraising, and fostering homeless dogs so we can save more. No matter what your skill sets are, we guarantee there is a way you can help us save more lives! Fill out the application here to get started!</p>
        <p className="application-link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdzuj9xzneUvENq6TgFLZxAxVBM1BzZrdU2Jrut6iXRMcTwFg/viewform">Please Fill Out This Application to Get Started!</a></p>
      </>
    },
    {
      heading: "What do you need help with?",
      imgUrl: "/volunteer/volunteer-abby.jpg?h=340&fit=crop&w=340",
      prose: <> 
        <p>We need help with all sorts of things, including:</p>
        <ul>
          <li>Transporting dogs to and from events, to vet and grooming appointments,and from shelters to the rescue</li>
          <li>Promoting our dogs on sites like Craigslist and Nextdoor to increase their chances at adoption</li>
          <li>Volunteering at our bi-weekly adoption events (set up, tear down, walking dogs, cleaning, talking to adopters)</li>
          <li>Volunteering at our Safehouse in Palo Alto caring for dogs, cleaning, helping with foster hand-offs, and organizing donations</li>
          <li>Fundraising and grant writing to keep our organization running and rescuing more medical and special needs dogs</li>
          <li>Professional photographers who are experienced taking photos of animals</li>
          <li>Attorneys who can advise us on legal matters that arise</li>
          <li>Organizing Pop-Up events around the Bay Area: you will contact businesses, set up a day to bring a select group of animals out and host a po-p up adoption event</li>
          <li>Puppy Wellness Events and Birthday parties: Take a litter of our puppies to a local company or school and spread the joy! Events typically last 1-2 hours.</li>
        </li>
      </>
    },
    {
      heading: "What do I do at your events?",
      imgUrl: "/volunteer/volunteer-sol.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>Our events are held every other Saturday (or occasionally on Sundays) at Pet Food Express in Palo Alto. Before meet and greet events start, we set up dog pens, hang signs, organize materials, and greet fosters as the dogs arrive, getting them settled into their pens.</p>
        <p>During the event, we need people to talk to potential adopters, clean up after the dogs, play with dogs, and cuddle puppies. Once the event is over, we break down pens, remove signs, pack up supplies, and leave the store and outside area as clean as we found it. </p>
        <p>No dog experience is required: all we ask is a willingness to learn (and pick up poop!), a positive attitude, and the ability to talk to visitors about the rescue and our adoptable pups!</p>
      </>
    },
    {
      heading: "How Do I Get Started?",
      imgUrl: "/volunteer/volunteer-andy.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>The first step is to fill out the volunteer application and we will get in touch with you to further discuss your role in the rescue.</p>
        <p>Volunteers must be 14 or older, and volunteers under 18 will be required to have their parent or guardian sign a minor release form. We require that all event volunteers commit to coming out to events at least one day a month and stay for the full day (10 am to 4 pm on Saturdays). You must sign up to attend events before coming out.</p>
        <p>You will receive an email with volunteer opportunities the week of an event. If you are able to come out, please reply and let us know, and read through the volunteer email that will be sent out on Friday for important information! Please email volunteer@dpsrescue.com if you have any more questions!</p>
      </>
    }
  ];


  public render() {
    return (
      <div className="row">
        <div className="volunteer-header-images hidden-xs hidden-sm">
          <Imgix
            src="/volunteer/volunteer-header-marlina1.jpg"
            imgixParams={{
              rect: '0,0,4700,4000',
              fm: 'pjpg',
              fit: 'fill',
              fill: 'solid',
              'fill-color': '2E8C69'
            }}
            width={370}
            height={250}
          />
          <Imgix
            src="/volunteer/volunteer-header-group1.jpg"
            imgixParams={{
              rect: '200,100,1600,1100',
              fm: 'pjpg',
              fit: 'fill',
              fill: 'solid',
              'fill-color': '2E8C69'
            }}
            width={370}
            height={250}
          />
          <Imgix
            src="/volunteer/volunteer-header-group2.jpg"
            imgixParams={{
              rect: '100,280,650,450',
              fm: 'pjpg',
              fit: 'fill',
              fill: 'solid',
              'fill-color': '2E8C69'
            }}
            width={370}
            height={250}
          />
        </div>
        <DpsFaq sections={DpsVolunteerFaq.sections} />
      </div>
    );
  }
}
