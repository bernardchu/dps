import * as React from 'react';
import DpsFaq from '../common/DpsFaq';
import { IDpsFaqSection } from '../model/IDpsFaqSection';
import './volunteerFaq.scss';
import Imgix from 'react-imgix';

export default class DpsVolunteerFaq extends React.PureComponent {
  private static sections: IDpsFaqSection[] = [
    {
      heading: "How Can I Volunteer?",
      imgUrl: "/volunteer/volunteer-tanner.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>Thanks for asking! Our organization is powered by volunteers like you! We ask that folks have a heart for dogs and a willingness to work with a group of people. Our volunteer opportunities include assisting at adoptions events, transporting dogs, fundraising, and fostering homeless dogs so we can save more. We say if you love dogs and have a talent then let's find a place for you to use it.</p>
        <p className="application-link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdzuj9xzneUvENq6TgFLZxAxVBM1BzZrdU2Jrut6iXRMcTwFg/viewform">Please Fill Out This Application to Get Started!</a></p>
      </>
    },
    {
      heading: "What Will I Do?",
      imgUrl: "/volunteer/volunteer-abby.jpg?h=340&fit=crop&w=340",
      prose: <p>We need help with all sorts of things, including: Transporting dogs to and from events, to vet and grooming appointments Posting on social media multiple times a day to highlight our animals, our events, and the rescue Promoting our dogs on sites like Craigslist and Nextdoor to increase their chances at adoption Searching the Internet for dogs in need of rescuing that we can help Volunteering at our bi-weekly adoption events (set up, tear down, walking dogs, cleaning, talking to adopters) Volunteering at our larger annual expo events (similar to our bi-weekly events, but generally needs even more coordination and set up/tear down.)</p>
    },
    {
      heading: "What do I do at your events?",
      imgUrl: "/volunteer/volunteer-sol.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>Helping the rescue at our adoptions events is the most common way that our beloved teenage volunteers contribute to the rescue. Before adoption events start, we set up dog pens, hang signs, organize materials, and prepare for the van to arrive. Once the van arrives, all dogs need to be walked and then put in their proper pens.</p>
        <p>During adoptions, we need people to talk to potential adopters, clean up after the dogs, clean the van, play with dogs, and sit with the puppies. Once adoptions are over, we need to break down pens, remove signs, pack up supplies, and leave the store and outside area as clean as we found it. Even if going to busy events isn't your thing, you can still volunteer! We always need help with social media and transport. If you are interested in this, please email us to inquire or feel out the application. Chances are we need your skills!</p>
      </>
    },
    {
      heading: "How Do I Get Started?",
      imgUrl: "/volunteer/volunteer-andy.jpg?h=340&fit=crop&w=340",
      prose: <>
        <p>The first step is to fill out this volunteer application and we will get in touch with you to further discuss your role in the rescue.</p>
        <p>Volunteers must be 14 or older, and volunteers under 18 will be required to have their parent or guardian sign a minor release form. We require that all volunteers commit to coming out to adoption events at least one day a month and stay for the full day (10 am to 4 pm on Saturdays). You must sign up to attend events before coming out.</p>
        <p>You will receive an email with volunteer opportunities the week of an adoption event. If you are able to come out, please reply and let us know, and read through the volunteer email that will be sent out on Fridays to learn your assignment! Please email <a href="mailto:volunteer@dpsrescue.com">volunteer@dpsrescue.com</a> if you have any more questions!</p>
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
