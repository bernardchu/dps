import * as React from 'react';

export default class DpsInHonorOf extends React.PureComponent {
  public render() {
    return (
      <>
        <h1>In Honor Of</h1>
        <p>Honor a human or furry loved one with a tribute to them.</p>
        <p>
          Step 1: Submit your donation through Venmo (@DPSRescue) or Zelle (info@dpsrescue.com)<br />
          Step 2: Email <a href="mailto:rachel@dpsrescue.com">rachel@dpsrescue.com</a> with a photo (if you’d like to submit one) and a message (ex: In memory of my beloved Fluffy, adopted in 2002)
        </p>
        <p>Your photo and message can be posted on our social media, a page of our website or we can send an individual note. You get to choose how you’d like your pet to be remembered. We know the importance of pets and how essential it is to celebrate both our pets and the humans in our lives.</p>
      </>
    );
  }
}