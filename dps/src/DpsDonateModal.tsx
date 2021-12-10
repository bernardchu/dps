import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './routing/routes';

interface IDpsDonateModalContentProps {
  closeModal: any;
}

export default class DpsDonateModalContent extends React.PureComponent<IDpsDonateModalContentProps> {
  public render() {
    return (
      <>
        <header className="modal__header">
          <h2 className="modal__title" id="donate-modal-title">
            Holiday Drive to Save Lives
          </h2>
          <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main className="modal__content" id="modal-1-content">
          <div className="donate-modal-image-container">
            <img src="https://dps-festive.imgix.net/images/donate/donation-popup.jpeg?w=300&h=220&fit=crop&crop=top" alt="donate" />
          </div>
          <p>Donate now to help us save more dogs and cats in need! Your gift will provide:</p>
          <ul>
            <li>Food, treats, toys and other necessities</li>
            <li>Life-saving medical care</li>
            <li>Support for our foster homes</li>
            <li>Training for dogs with challenges</li>
            <li>And so much more!</li>
          </ul>
          <Link onClick={() => this.props.closeModal()} to={`${routes.donate.path}/${routes.donate.children!.donate.path}`} className="hero-button col-xs-12">Donate</Link>
        </main>
      </>

    );
  }
}
