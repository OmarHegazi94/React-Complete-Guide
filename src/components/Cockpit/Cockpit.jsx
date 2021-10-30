import React, {useEffect, useRef, useContext} from "react";
import styled from "styled-components/macro";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

function Cockpit(props) {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("Cockpit.js useEffect");
    // Fake Http request...
    // const timer =
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);

    toggleBtnRef.current.click();

    // Runs after the first render cycle but Before the main useEffect function
    return () => {
      // Clean up work here
      //   clearTimeout(timer);
      console.log("Cockpit.js cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("Cockpit.js 2nd useEffect");
    return () => {
      console.log("Cockpit.js cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!</p>
      <StyledButton ref={toggleBtnRef} onClick={props.togglePerson} alt={props.showPersons.toString()}>
        Toggle Perons
      </StyledButton>
      <button onClick={authContext.login}>Login</button>
    </>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

export default React.memo(Cockpit);
