import * as React from 'react';
import DpsAuctionDonor from './DpsAuctionDonor';
import { DONORS } from './donors';

export interface IDpsAuctionDonor {
  name: string;
  link: string;
  imgSrc?: string;
}

export default class DpsAuction extends React.PureComponent {
  private static AUCTION_INFO_EMAIL = 'koslob@dpsrescue.org';

  public render() {
    return (
      <div className="auction donate row">
        <div className="col-sm-12 col-xs-12">
          <h1>Support the DPS Rescue Auction and Save Lives!</h1>
          <p>
            Join us in person at the Grand Bay Hotel (223 Twin Dolphin Dr, Redwood City) on March 2 to get a sneak peek at all the amazing items that will be available on our online auction. We will have light snacks and puppies to play with. Register to join <a href="https://bit.ly/3PCAT5G">here</a>.
          </p>
          <hr/>
          <p>
            Join Doggie Protective Services (DPS Rescue) in making a difference this spring! Our annual fundraiser and online auction will take place from <strong>March 8th to March 16th, 2025</strong>.
            All proceeds will go directly towards the medical care and general well-being of the dogs and cats we rescue—helping save lives, one furry friend at a time.
          </p>
          <h2>About DPS Rescue</h2>
          <p>
            DPS Rescue is a 501(c)(3) non-profit, volunteer-driven animal rescue organization based in the Bay Area, California.
            Since our founding in 2001, we have helped over <strong>19,000 dogs and cats</strong> find their forever homes.
            We rescue animals of all breeds, ages, and sizes, ensuring every one of them gets a chance at a better life.
          </p>

          <h2>Why Donate to the Auction?</h2>
          <p>Your generous donation to our auction will directly support:</p>
          <ul>
            <li>Emergency medical care for injured and sick animals</li>
            <li>Daily care and shelter for rescued pets</li>
            <li>Transporting animals from high-risk environments to safety</li>
            <li>Finding loving, forever homes for our rescues</li>
          </ul>
          <p>
            Your contributions are <strong>tax-deductible</strong> (Tax ID: 91-2164578) and will make a lasting impact on the lives of animals in need.
          </p>
          <h2>Recognizing Our Generous Donors</h2>
          <p>
            We are deeply grateful to the businesses, individuals, and organizations who make this event possible.
            Here are some of our 2025 auction supporters:
          </p>
          <div className="row">
            {DONORS.map(donor =>
              <DpsAuctionDonor
                key={donor.name}
                name={donor.name}
                link={donor.link}
                imgSrc={donor.imgSrc}
              />
            )}
          </div>
          <p>
            Want to see your name or business listed here? It&rsquo;s not too late to contribute! Reach out today to make a difference.
          </p>
          <h2>How You Can Help</h2>
          <ul>
            <li><strong>Donate an Item or Experience:</strong> Gift cards, products, and unique experiences are highly appreciated.</li>
            <li><strong>Sponsor the Event:</strong> Become a key supporter and help us reach even more animals in need.</li>
            <li><strong>Bid and Share:</strong> Mark your calendar for March 8th to 16th and spread the word about our auction!</li>
          </ul>
          <h2>Contact Us</h2>
          <p>For donations or questions, contact:</p>
          <ul>
            <li><strong>Kim Oslob</strong>, Auction Director</li>
            <li>Email: <a href={`mailto:${DpsAuction.AUCTION_INFO_EMAIL}?subject=Questions regarding DPS auction`}>koslob@dpsrescue.org</a></li>
            <li>Phone: <a href="tel:4083686600">408-368-6600</a></li>
          </ul>
          <p>
            Thank you for being a part of the DPS Rescue community.
            Together, we can give every dog and cat a second chance at life.
          </p>
        </div>
      </div>
    );
  }
}
