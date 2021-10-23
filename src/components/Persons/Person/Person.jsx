// import "./Person.css";
import React, {Component} from "react";
import styled from "styled-components/macro";

class Person extends Component {
  render() {
    console.log("Person.js rendering..");
    return (
      <StyledDiv>
        <p onClick={this.props.clickPerson}>
          I'm {this.props.name} and I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changePerson} value={this.props.name} />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 10px #ebebeb;
  padding: 16px;
  text-align: center;
  border-radius: 8px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

export default Person;
