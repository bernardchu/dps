import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes';
import './_application.scss';

export default class DpsAdoptApplication extends React.Component {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2 className="application-heading">Application Process</h2>
          <div className="application-buttons">
            <Link to={`../${routes.adopt.children!.application.path}`}>Dog Application</Link>
            <Link to={`../${routes.adopt.children!.catApp.path}`}>Cat Application</Link>
          </div>

          <p>
            Our Adoption Process:
          </p>

          <ol>
            <li>
              If you see a dog that you are interested in, check the bottom of their biography to see the kind of home we are looking for/qualifications to adopt that dog! Our goal is to send each dog to their forever home, and we do our best to match our dogs with the most appropriate homes for them.
            </li>

            <li>
              Fill out an application! If we think you are a potential match, we will be in touch within 48 hours. If we have set up the dog to meet with a family, or are pursuing other applicants, we will not contact you further. We understand that it can be exhausting and frustrating to keep applying. We take your effort and energy very seriously. We do not take it for granted. We receive upwards of 50-100 applications per dog and review every one of them, so please be patient with us.
            </li>

            <li>
              If your application is found to be a match for that dog, our interview team will give you a call. Keep an eye out for numbers with a 650 or 408 area code and listen to your voicemails in case we miss you.
            </li>

            <li>
              The interview team selects one home to adopt, and sends them an invitation containing information about the dog, the adoption appointment, and the deposit. We established the deposit policy to prevent last minute cancellations and no-shows. Our $50 dollar deposit goes towards your adoption fee. After it is paid, we will work with you to find a time/date of your appointment, which will be set up within three days of your approval.
            </li>

            <li>
              If you pay your deposit, you will be told to arrive at your appointment with a collar, leash, and dog tag. It is also recommended that you bring a crate for safe transport of your new pup to your home. Feel free to bring other dogs, if you have them, and family members along to your appointment.
            </li>

            <li>
              If you decide to adopt, you take the dog home that day! We will follow up with you  to make sure your dog is settling in, and we always appreciate updates if you want to send them our way.
            </li>
          </ol>

          <p>If you&rsquo;re hoping to meet several of our dogs at once and aren&rsquo;t yet sure which one you would be interested in adopting, please check out the home page for upcoming Meet &amp; Greet events!</p>
          <p>Thank you for your interest in our dogs. We look forward to seeing your application. </p>


          {/* Legacy stuff
          <p>Our responsibility is to both the adopter and our dogs who have been entrusted to our care. We strive to make the best possible match and we can only do so when we have been provided with all the information about our potential adoptive families.</p>
          <ol class="application-steps">
            <li>Read the dog&lsquo;s bio</li>
            <p>Each dog has a full biography linked from the Available Animals page. Please read his/her description before applying to make sure that the home we are looking for is a match to what you have to offer.</p>

            <li>Complete the application</li>
            <p>Tell us all about you and let's see if we can make a love match. Until we know about your home and your experience we won't know if our little fur friend is going home! Please take your time and complete the application thoroughly. We certainly understand excitement and enthusiasm and that sometimes adopters want to rush through the application. Unfortunately, that may mean we do not pursue an adoption because we don't have enough information.</p>

            <li>Conduct phone interview</li>
            <p>Once applications are received and reviewed, we choose the best possible match and do a phone interview. Unfortunately, we are not able to interview all potential matches by phone. To have the best possible consideration for an interview, please make sure your application is thorough and complete and that all of your contact information is accurate.</p>

            <li>Meet and greet</li>
            <p>After conducting the phone interview and if it appears to be a match, we will send an email with instructions for meeting your new potential family fur member! We will meet with the entire family and hopefully, it's a love match. If so, we have a contract and our adoption fee and you have successfully adopted!</p>
          </ol>
          <hr>
          <p>Once you submit an application a copy will automatically be returned to you. You do not need to fill out another application if you don’t adopt the first dog you were interested in. Simply hit reply on the application sent back to you and indicate who you are next interested in. If you do not receive a copy, then we did not receive your application. You will receive an email response to your application usually within 48 hours. If you do not, please email us AFTER 48 HOURS HAS PASSED.</p>
          <p>If you email an application on the night before an event or the day of an event it may not be reviewed. Please still come out but we may not be able to review all apps turned in at the last hours before events.</p>
          <p>Our adoption fees are $400-$800 and specified on the biography of each dog and/or puppy. The adoption fee can be paid with cash or credit card.</p>
          <p>This application is the only opportunity we have to learn about you initially. Please consider taking your time and not rushing through it. We want to adopt to you. But we can only pursue an interview with those applications that are thorough and are a match for our dog and we only know that if you take your time, please.</p>
          */}

        </div>
      </div>

    );
  }
}
