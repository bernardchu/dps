import * as React from 'react';
import { IDpsFaqSection } from '../model/IDpsFaqSection';
import DpsFaqSection from './DpsFaqSection';

export interface IDpsFaqProps {
  sections: IDpsFaqSection[]
}

export default class DpsFaq extends React.PureComponent<IDpsFaqProps> {
  public render() {
    const sections = this.props.sections;
    return (
      <div>
        <div className="faq">
          {sections.map((section: IDpsFaqSection, index: number) => {
            return <React.Fragment key={section.heading}>
              <DpsFaqSection section={section} />
              {index !== sections.length - 1 && <hr />}
            </React.Fragment>
          })}
        </div>
      </div>
    );
  }
}
