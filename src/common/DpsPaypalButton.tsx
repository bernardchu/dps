import * as React from 'react';
import { paypalEmail } from './DpsConstants';

export interface IDpsPaypalButtonProps {
  name: string;
  purpose: string;
}

export default class DpsPaypalButton extends React.PureComponent<IDpsPaypalButtonProps> {
  public render() {
    return (
      <div className="paypal-container">
        <form target="PayPal" action="https://www.paypal.com/cgi-bin/webscr"
          method="post">
          <input type="hidden" name="business"
            value={paypalEmail} />
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden"
            name="item_name"
            value={`Sponsor ${this.props.name}`} />
          <input type="hidden" name="item_number"
            value={`Donate toward ${this.props.purpose}`} />
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
    );
  }
}
