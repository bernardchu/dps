import * as React from 'react';
import './employerMatching.scss';

export default class DpsEmployerMatching extends React.PureComponent {
  private static COMPANIES_WITH_MATCHING = [
    'Adobe',
    'Apple',
    'AT&T',
    'Clorox',
    'DocuSign',
    'Dolby Digital',
    'Dropbox',
    'Genentech',
    'Google',
    'HP',
    'Intel',
    'LinkedIn',
    'Microsoft',
    'Morgan Stanley',
    'Oracle',
    'Paypal',
    'PG&E',
    'Sephora',
    'Visa',
  ];

  public render() {
    return (
      <div className="employer-matching">
        <h1>Employer Matching Gifts</h1>
        <p>Many companies offer corporate gift matching programs to their employees, so when you make a donation to DPS, it’s doubled!  Ask your company HR department to see if they offer this option.</p>

        <p>Our information:<br />
          Name: Doggie Protective Services DBA DPS Rescue<br />
          Tax ID: 91-2164578<br />
          Mailing Address: PO Box 1508 • Romoland, CA 92585<br />
          Website: www.dpsrescue.org<br />
          Email: donna@dpsrescue.org</p>

        <h3>Companies with confirmed corporate matching include:</h3>
        <div className="companies-list">
          {DpsEmployerMatching.COMPANIES_WITH_MATCHING.map(company => <span className="matching-company" key={company}>{company}</span>)}
        </div>
      </div>
    );
  }
}
