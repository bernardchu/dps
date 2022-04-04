import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './routing/routes';
import Imgix from 'react-imgix';

interface IDpsDonateModalContentProps {
  closeModal: any;
}

export default class DpsDonateModalContent extends React.PureComponent<IDpsDonateModalContentProps> {
  public render() {
    return (
      <>
        <header className="modal__header">
          <h2 className="modal__title" id="donate-modal-title">
            Puppy Alert!
          </h2>
          <span className="hand" onClick={() => this.props.closeModal()}>X</span>
        </header>
        <main className="modal__content" id="modal-1-content">
          <div className="donate-modal-image-container">
            <Imgix
              src="/donate/donate-mama-dog2.jpeg"
              width={300}
              htmlAttributes={{ alt: 'donate' }} />
          </div>
          <p>DPS currently has 12 nursing mama dogs and their 52 babies in our foster homes. Please donate to help us with veterinary care, puppy food, potty pads and the myriad other needs of these sweet rescue dogs and puppies!</p>
          <Link onClick={() => this.props.closeModal()} to={`${routes.donate.path}/${routes.donate.children!.donate.path}`} className="hero-button col-xs-12">Donate Now</Link>
        </main>
      </>

    );
  }
}
