import * as React from 'react';
import Link from 'next/link';
import { routes } from '../routing/routes';
import Imgix from 'react-imgix';
import { IDpsModalContent } from './IDpsModalContent';

interface IDpsDonateModalContentProps {
  closeModal: any;
  content: IDpsModalContent;
}

export default class DpsDonateModalContent extends React.PureComponent<IDpsDonateModalContentProps> {
  public render() {
    const { heading, bodyText, imgUrl, buttonText } = this.props.content;

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
          <Link href={`/${routes.donate.path}/${routes.donate.children!.donate.path}`}><a className="hero-button col-xs-12" onClick={() => this.props.closeModal()} >{buttonText || 'Donate Now'}</a></Link>
        </main>
      </>

    );
  }
}
