import * as React from 'react';
import Link from 'next/link';
import { routes } from '../../routing/routes';
import styles from './dogApplication.module.scss';

export default class DpsAdoptApplication extends React.Component {
  public render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2 className="application-heading">Application Process</h2>
          <div className="application-buttons">
            <Link href={`../${routes.adopt.children!.application.path}`}><a>Dog Application</a></Link>
            <Link href={`../${routes.adopt.children!.catApp.path}`}><a>Cat Application</a></Link>
          </div>

          <p>
            Our COVID-19 adoption process:
          </p>

          <ol>
            <li>
              If you see a dog that you are interested in, check the bottom of their biography to see
              the kind of home we are looking for/qualifications to adopt that dog! Each of our dogs
              requires a different experience level, but consistent thing you will notice is that we do
              not adopt out to homes with children under the age of 6, and that age may be higher for
              specific dogs that need a quieter home.
            </li>

            <li>
              If you qualify and are still interested, fill out an application! If we think you are a
              potential match, we will be in touch within 48 hours. If we have set up the dog, or are
              pursuing other applicants, we will not contact you further. Please note, since March 2020
              we have received over 25,000 applications for our dogs. This is unprecedented. We also
              understand that it can be exhausting and frustrating to keep applying. Unfortunately there
              isn’t another way and this is how things are today. We take your effort and energy very
              seriously. We do not take it for granted. We receive upwards of 50-100 applications per
              dog and review every one of them, so please be patient with us.
            </li>

            <li>
              If your application is found to be a match for that dog, our interview team will give you
              call. Keep an eye out for numbers with a 650 or 408 area code, and listen to your
              voicemails in case we miss you.
            </li>

            <li>The interview team selects one perfect home to adopt, and send them an invitation which
              contains information about their dog, their adoption appointment, and their deposit. We
              established the deposit policy because we were spinning our wheels doing applications and
              setting people up who never showed up and didn’t bother to tell us they weren’t coming, or
              cancedlling with little to no notice. COVID-19 has only reinforced the need to make sure
              that when we are asking our people to come out, the adopter is truly committed to showing
              up and being serious about adopting. Our $50 dollar deposit goes towards your adoption
              fees. After it is paid, we will work with you to find a time/date of your appointment,
              which will be set up within three days of your approval.</li>

            <li>
              If you pay your deposit, you will be told to arrive at your appointment with a collar,
              leash, and dog tag. Nothing else is required except for your wonderful self! Feel free to
              bring other dogs, if you have them, and family members along to your appointment. We
              follow social distancing guidelines, and would appreciate it if you would wear a mask as a
              layer of additional protection. </li>

            <li>
              If you decide to adopt, you take the dog home that day, and start a new life with your
              dog! We will follow up with you a week, six months, and a year after your appointment to
              make sure your dog is settling in, and we always appreciate other updates if you want to
              send them our way.</li>
          </ol>

          <p>
            Thank you for your interest in our dogs. We look forward to seeing your application. </p>


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
