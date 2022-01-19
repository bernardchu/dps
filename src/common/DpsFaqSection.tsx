import * as React from 'react';
import { IDpsFaqSection } from '../model/IDpsFaqSection';
import Imgix from 'react-imgix';

export interface IDpsFaqSectionProps {
  section: IDpsFaqSection
}

export default class DpsFaqSection extends React.PureComponent<IDpsFaqSectionProps> {
  public render() {
    const section = this.props.section;
    return (
      <div className="faq-section row">
        <h2>{section.heading}</h2>
        <div className="col-xs-12 row">
          <div className="col-md-4 hidden-sm hidden-xs image">
            <Imgix src={section.imgUrl} />
          </div>
          <div className="col-md-8 col-sm-12">
            {section.prose}
          </div>
        </div>
      </div>
    );
  }
}
