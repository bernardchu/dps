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
    const to = href || DpsDonateModalContent.DEFAULT_HREF;

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
          <Link onClick={() => this.props.closeModal()} to={{ pathname: to }} className="hero-button col-xs-12">{buttonText || 'Donate Now'}</Link>
        </main>
      </>

    );
  }
}
