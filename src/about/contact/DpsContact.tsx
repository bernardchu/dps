import * as React from 'react';
import './contact.scss';
import Imgix from 'react-imgix';

export default class DpsContact extends React.Component {
  public render() {
    return (
      <div className="row contact">
        <div className="col-md-8 col-sm-12">
          <iframe src="https://docs.google.com/forms/d/17wNax1Hm9Ge0vxqqhGGskP_Zt6JkO4H0zqsg9MjMddA/viewform?embedded=true"
            frameBorder="0" height="600" width="640" title="Contact Form"></iframe>
        </div>
        <div className="col-md-4 hidden-sm hidden-xs">
          <Imgix src="https://dps-festive.imgix.net/images/about/contact/cindy.jpg" width={380} htmlAttributes={{ alt: 'Cindy', title: 'Cindy' }} />
        </div>
      </div>);
  }
}
