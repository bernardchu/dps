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
            Join us in honoring Betty White
          </h2>
        </header>
        <main className="modal__content" id="modal-1-content">
          <div className="donate-modal-image-container">
            <img src="https://dps-festive.imgix.net/images/donate/betty-white-usa-today.jpeg?txt64=U291cmNlOiBVU0EgVG9kYXk=&txt-clr=white&w=300" alt="donate" />
          </div>
          <p>Betty White demonstrated a lifelong commitment to helping animals in need. Join us in honoring Betty White's memory to make the world a better, kinder place for all animals by making a donation in support of the work we do.</p>
          <Link onClick={() => this.props.closeModal()} to={`${routes.donate.path}/${routes.donate.children!.donate.path}`} className="hero-button col-xs-12">Donate Now</Link>
        </main>
      </>

    );
  }
}
