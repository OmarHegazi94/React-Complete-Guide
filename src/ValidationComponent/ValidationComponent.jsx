import React from "react";

export default function ValidationComponent(props) {
  return (
    <div>
      <p>{props.textLength < 5 ? "Text is too short" : "Text is too long"}</p>
    </div>
  );
}
