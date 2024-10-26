import * as React from 'react';
import { donateEmail } from '../../common/DpsConstants';
import Imgix from 'react-imgix';

export default class DpsLegacy extends React.PureComponent {
  public render() {
    return (
      <div className="legacy donate row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <h1>Legacy of Love for Our Furry Friends</h1>
          <p>With every wagging tail and joyful bark, we see the heartwarming impact of your support at Doggie Protective Services. Our mission is to provide love, safety, and care to dogs in need, and with your help, we've been able to give countless animals a second chance at happiness. But there&rsquo;s another way you can ensure this mission continues for generations to come: by including DPS in your legacy planning.
          </p>
          <h1>Already Included Us in Your Estate Plan?</h1>
          <p>Make sure your gift has the impact you were hoping for by <a href={`mailto:${donateEmail}?subject=DPS Legacy Gift`}>letting us know</a>.</p>
          <h1>Making a Difference Beyond Today</h1>
          <p>By adding Doggie Protective Services to your will or trust, you're building a lasting legacy of compassion and care for dogs who need it most. This simple act can provide hope, rescue, and new homes for future dogs, creating a world where every animal has a loving family.
          </p>
          <h1>How You Can Help Secure Their Future</h1>
          <p>Planning a legacy gift doesn&rsquo;t require large assets. From bequests to beneficiary designations, every contribution&mdash;no matter the size&mdash;makes a profound difference. Gifts can include (but are not limited to): cash, life insurance, real estate, retirement assets, stocks, and securities.
          </p>
          <h1>Ready to Get Started?</h1>
          <p>It&rsquo;s easy (and free) to create your own will at <a href="https://www.freewill.com/" target='_blank'>freewill.com</a>.</p>
          <p>We&rsquo;re here to guide you every step of the way. If you&rsquo;d like more information or wish to discuss your options, <a href={`mailto:${donateEmail}?subject=Questions regarding DPS Legacy Gift`}>reach out to us</a>. Together, let&rsquo;s ensure a bright future for all our four-legged friends.
          </p>
        </div>
        <div className="col-md-4 col-sm-12 hidden-xs image">
          <Imgix
            src="donate/legacy/donate-legacy.jpg"
            className="no-border"
            htmlAttributes={{ alt: 'include DPS in your estate plan', title: 'a cute dog' }} />
        </div>

      </div>
    );
  }
}
