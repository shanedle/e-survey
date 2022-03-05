import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="E-Survey"
        description="Enter 4242 4242 4242 4242"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="btn">
          Add Credits <i class="material-icons right">credit_card</i>
        </a>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
