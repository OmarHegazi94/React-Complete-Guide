import React from "react";
// import Aux from "../../../hoc/Auxiliraly";
import Button from "../../UI/Button/Button.jsx";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredientKey) => {
    return (
      <li key={ingredientKey}>
        <span style={{textTransform: "capitalize"}}>{ingredientKey}</span> {props.ingredients[ingredientKey]}
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
        <strong>Total price:</strong> ${props.price.toFixed(2)}
      </p>

      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </>
  );
}

export default OrderSummary;
