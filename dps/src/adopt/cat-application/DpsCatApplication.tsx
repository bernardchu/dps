import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes';
import './catApplication.scss';

export default class DpsCatApplication extends React.Component {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>Cat Application Process</h2>
          <div className="application-buttons">
            <Link to={`../${routes.adopt.children!.catApplication.path}`}>Cat Application</Link>
          </div>

          <p>Our responsibility is to both the adopter and our animals who have been entrusted to our care. We strive to
            make the best possible match and we can only do so when we have been provided with all the information about our
            potential adoptive families.</p>
          <ol className="application-steps">
            <li>Read the cat&lsquo;s bio</li>
            <p>Each cat has a full biography linked from the Available Animals page. Please read his/her description before
              applying to make sure that the home we are looking for is a match to what you have to offer.</p>

            <li>Complete the application</li>
            <p>Tell us all about you and let's see if we can make a love match. Until we know about your home and your
              experience we won't know if our little fur friend is going home! Please take your time and complete the
              application thoroughly. We certainly understand excitement and enthusiasm and that sometimes adopters want to
              rush through the application. Unfortunately, that may mean we do not pursue an adoption because we don't have
              enough information.</p>

            <li>Conduct phone interview</li>
            <p>Once applications are received and reviewed, we choose the best possible match and do a phone interview.
              Unfortunately we are not able to interview all potential matches by phone. To have the best possible
              consideration for an interview, please make sure your application is thorough and complete and that all of
              your contact information is accurate.</p>

            <li>Meet and greet</li>
            <p>After conducting the phone interview and if it appears to be a match, we will send an email with instructions
              for meeting your new potential family fur member! We will meet with the entire family and hopefully it's a
              love match. If so, we have a contract and our adoption fee and you have successfully adopted!</p>
          </ol>
          <hr />
          <p>All kittens are $150 while all cats are $100.The donation can be paid with cash, credit, or with venmo.To
            find out more about our process email <a href="mailto:info@dpsrescue.com">info @dpsrescue.com</a></p>
          <p>Please answer every question or your application will not be considered.If any answers are found to be
            incorrect or untruthful it will void an adoption.If you do not receive a response within 24 hours of submitting
            an application please email again.We do not ignore received applications.</p>

        </div>
      </div>

    );
  }
}
