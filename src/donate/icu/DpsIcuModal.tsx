import * as React from 'react';
import { paypalEmail } from '../../common/DpsConstants';
import DpsPaypalButton from '../../common/DpsPaypalButton';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';

export interface IDpsIcuModalProps {
  animal: IDpsIcuAnimal;
  closeModal: any;
}

export default class DpsIcuModal extends React.PureComponent<IDpsIcuModalProps> {
  public render() {
    const animal = this.props.animal;
    return (
      <div className="modal micromodal-slide" id={animal.name} aria-hidden="true">
        <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
          <div className="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-1-title">
            <header className="modal__header">
              <h2 className="modal__title" id="modal-1-title">
                {animal.name}
              </h2>
              <span className="hand" onClick={() => this.props.closeModal()}>X</span>
            </header>
            <main className="modal__content" id="modal-1-content">
              <div dangerouslySetInnerHTML={{ __html: animal.bio }} />
              <DpsPaypalButton name={animal.name} purpose={`${animal.name}'s care`} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
