import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routing/routes';
import Imgix from 'react-imgix';
import { IDpsModalContent } from './IDpsModalContent';

interface IDpsDonateModalContentProps {
  closeModal: any;
  content: IDpsModalContent;
}

export default class DpsDonateModalContent extends React.PureComponent<IDpsDonateModalContentProps> {
  private static DEFAULT_HREF = `${routes.donate.path}/${routes.donate.children!.donate.path}`;

  public render() {
    const { heading, bodyText, imgUrl, buttonText, href } = this.props.content;
    const renderedButtonText = buttonText || 'Donate Now';

    return (
      <>
        <header className="modal__header">
          <h2 className="modal__title" id="donate-modal-title">
            {heading}
          </h2>
          <span className="hand" onClick={() => this.props.closeModal()}>X</span>
        </header>
        <main className="modal__content" id="modal-1-content">
          <div className="donate-modal-image-container">
            <Imgix
              src={imgUrl}
              width={300}
              htmlAttributes={{ alt: 'donate' }} />
          </div>
          <p>{bodyText}</p>
          {href && <a href={href} onClick={() => this.props.closeModal()} className="hero-button col-xs-12">{renderedButtonText}</a>}
          {!href && <Link onClick={() => this.props.closeModal()} to={DpsDonateModalContent.DEFAULT_HREF} className="hero-button col-xs-12">{renderedButtonText}</Link>}
        </main>
      </>

    );
  }
}
