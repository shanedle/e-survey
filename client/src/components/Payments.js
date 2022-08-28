import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import * as actions from "../actions";

const Payments = (props) => {
  return (
    <StripeCheckout
      name="E-Survey"
      description="Enter 4242 4242 4242 4242"
      amount={500}
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <a href="#!" className="btn blue darken-1">
        Add Credits <i className="material-icons right">credit_card</i>
      </a>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);
