import * as React from 'react';
import { Link } from 'react-router-dom';
import DpsApi from '../api/DpsApi';
import { IDpsFeaturedApiResponse } from '../api/IDpsApiResponses';
import { imgixDomain } from '../common/DpsImgixDomain';
import DpsLoading from '../common/DpsLoading';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import { IDpsHomeFeatureCardData } from '../model/IDpsBasicFeature';
import { routes } from '../routing/routes';
import DpsHomeCarousel from './DpsHomeCarousel';
import DpsHomeEvents from './DpsHomeEvents';
import DpsHomeFeatureCard from './DpsHomeFeatureCard';
import DpsHomeSidebarFeatures from './DpsHomeSidebarFeatures';

export interface IDpsHomeState extends IDpsAsyncState {
  featured: IDpsHomeFeatureCardData[];
}

export default class DpsHome extends React.PureComponent<{}, IDpsHomeState> {
  private static createFeatureCards(featured: IDpsFeaturedApiResponse): IDpsHomeFeatureCardData[] {
    return featured.map(feature => {
      return {
        title: feature.title,
        bodyText: feature.description,
        externalLink: feature.href,
        imgSrc: feature.imgurl,
        linkText: feature.href_text,
        newTab: feature.new_tab
      }
    });
  }

  public componentDidMount() {
    DpsApi.getFeatured()
      .then((featured: IDpsFeaturedApiResponse) => {
        this.setState({
          featured: DpsHome.createFeatureCards(featured),
          loaded: true
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const auctionFeature: IDpsHomeFeatureCardData = {
      title: 'DPS Online Auctions',
      body:
        <div>
          <p>
            This summer, from July 22nd to July 29th, DPS Rescue will be holding an online auction! All proceeds will go to the dogs and cats we rescue daily, covering the costs of their medical and general care while we strive to find them their furever homes.
          </p>
          <p>
            Here’s how you can help in this event:
          </p>
          <ul>
            <li>Participate in the online auction when it goes live <a target="_blank" rel="noreferrer" href="https://dpsrescue.travelpledgeauctions.com/event/1723">here</a> (you can pre-register and view items before the auction goes live)</li>
            <li>Donate items to the auction by (by emailing <a href="mailto:koslob@dpsrescue.org">koslob@dpsrescue.org</a>). All donations are tax-deductible</li>
            <li>Promote the auction via social media</li>
          </ul>
          <p>If you have any questions, feel free to contact Kim at <a href="mailto:koslob@dpsrescue.org">koslob@dpsrescue.org</a>. Our staff, volunteers, and rescue all thank you for your generosity!</p>
          <p>Sample auction item: <a href="https://www.litter-robot.com/litter-robot-4.html" target="_blank" rel="noreferrer">Litter Robot 4</a></p>
          {/* We're not using the imgSrc prop of DpsHomeFeatureCard because that uses Imgix elements, and the srcset that results screws with the desired image scaling behavior here. Scaling is necessary to accommodate whatever images they want to swap this out for in the future */}
          <a href="https://www.litter-robot.com/litter-robot-4.html" target="_blank" rel="noreferrer"><img src={`http://${imgixDomain}/home/summer-auction-example.png?h=275&w=686&fit=fill&fill=solid`} /> </a>
        </div>
    };

    const merchFeature: IDpsHomeFeatureCardData = {
      title: 'Get DPS Merchandise at Our Online Store',
      externalLink: 'https://www.bonfire.com/store/dpsrescue/',
      imgSrc: '/home/merch.png?auto=format&pad=20&bg=2E8C69',
    };

    const aboutFeature: IDpsHomeFeatureCardData = {
      title: 'Who We Are',
      body:
        <div>
          <p>Doggie Protective Services, better known as DPS Rescue, was founded in 2001. We are a 501(c)(3) nonprofit organization that rescues dogs and cats of all ages, sizes, and breeds from throughout the state of California. Our main base of operations is in the Bay Area, but we rescue many dogs from Southern CA as well. We do not have a shelter facility and all of our dogs live in foster homes from intake through adoption. We do not receive any government funding and rely 100% on donations from our supporters and our community in order to save lives.</p>
          <p>We specialize in rescuing those that may be at risk of euthanasia, including pregnant and nursing mama dogs, medical cases, and the shy and shut down pups who do not thrive in the shelter environment.</p>
          <p>We don’t just rescue dogs! We also have a team that rescues cats and kittens, including bottle babies and nursing mama cats, and cares for them until they are old enough to be adopted.</p>
          <p>On average, it costs us approximately $500 to get a dog ready for adoption. Those costs include vet health checks, spay/neuter surgery, vaccinations, flea treatment, dewormer, and microchipping, as well as food, treats, toys, potty pads, x-pens, and all other supplies, which we provide free of cost to our foster homes. Many of our rescued animals have special needs, and our adoption fees and donations help cover the cost of specialty surgeries such as enucleation, amputation, hernia repair, and many more.</p>
          <p>We hold biweekly Saturday meet and greet events from 12-3 pm at Pet Food Express in Palo Alto and host individual adoptions throughout the week by appointment. We welcome adopters from Northern CA and beyond; as long as you can come in person to meet and adopt your new family member, you’re more than welcome to adopt from DPS!</p>
          <p>We are always in need of more foster homes and volunteers! Click <Link to={`${routes.foster.path}/${routes.foster.children!.faq.path}`}>here</Link> to sign up to become a lifesaving foster home or <Link to={`${routes.volunteer.path}/${routes.volunteer.children!.faq.path}`}>here</Link> to sign up to volunteer at our events, to join our transport team, or to learn other ways you can support DPS!</p>
        </div>
    };

    const loaded = this.state?.loaded;
    const featured = this.state?.featured;

    return (
      <>
        <div className="row">
          <div className="adoptable col-md-12 container">
            <DpsHomeCarousel />
            <Link to={`${routes.adopt.path}/${routes.adopt.children!.available.path}`} className="hero-button col-xs-12">See All
              Available Dogs and Cats</Link>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 row features">
          <DpsHomeEvents />
          {!loaded && <DpsLoading />}
          {loaded && featured.map(feature => <DpsHomeFeatureCard feature={feature} />)}
          <DpsHomeFeatureCard feature={auctionFeature} />
          <DpsHomeFeatureCard feature={merchFeature} />
          <div className="col-md-12 featured card">
            {/* <!-- Begin Constant Contact Inline Form Code --> */}
            <div className="ctct-inline-form" data-form-id="507eddd4-ebbf-4431-b7d1-e68dc4c14e4f"></div>
            {/* <!-- End Constant Contact Inline Form Code --> */}
          </div>
          <DpsHomeFeatureCard feature={aboutFeature} />
        </div>
        <div className="col-md-4 col-sm-12 row">
          <DpsHomeSidebarFeatures />
        </div>
      </>

    );
  }
}
