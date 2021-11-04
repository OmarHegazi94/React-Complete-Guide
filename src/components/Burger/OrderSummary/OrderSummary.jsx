import React from "react";
import {Component} from "react";
import Button from "../../UI/Button/Button.jsx";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("Order Summary Updated!");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((ingredientKey) => {
      return (
        <li key={ingredientKey}>
          <span style={{textTransform: "capitalize"}}>{ingredientKey}</span> {this.props.ingredients[ingredientKey]}
        </li>
      );
    });

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>

        <p>
          <strong>Total price:</strong> ${this.props.price.toFixed(2)}
        </p>

        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </>
    );
  }
}

export default OrderSummary;
