import * as React from 'react';
import { paypalEmail } from '../../common/DpsConstants';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import styles from './icu.module.scss';

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
              <div className={styles['paypal-container']}>
                <form target="PayPal" action="https://www.paypal.com/cgi-bin/webscr"
                  method="post">
                  <input type="hidden" name="business"
                    value={paypalEmail} />
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden"
                    name="item_name"
                    value={`Sponsor ${animal.name}`} />
                  <input type="hidden" name="item_number"
                    value={`Donate toward ${animal.name}'s care'`} />
                  <input type="hidden"
                    name="currency_code"
                    value="USD" />
                  <input type="hidden" name="return" value={window.location.origin} />
                  <input
                    type="hidden" name="cancel_return"
                    value={window.location.origin} />
                  <input type="hidden" name="receiver_email"
                    value={paypalEmail} />
                  <input type="hidden"
                    name="no_shipping"
                    value="1" />
                  <input type="hidden" name="no_note" value="1" />
                  <input type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!" />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
