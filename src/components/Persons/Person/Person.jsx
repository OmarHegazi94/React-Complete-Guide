// import "./Person.css";
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

// import Auxiliary from "../../../hoc/Auxiliary";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();

    console.log(this.context.authenticated);
  }

  render() {
    console.log("Person.js rendering..");
    return (
      <Fragment>
        {/* <AuthContext.Consumer>
          {(context) => {
            context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>;
          }}
        </AuthContext.Consumer> */}

        <StyledDiv>
          {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
          <p onClick={this.props.clickPerson}>
            I'm {this.props.name} and I'm {this.props.age}
          </p>
          <p>{this.props.children}</p>
          <input
            // ref={(inputEl) => {
            //   this.inputElement = inputEl;
            // }}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changePerson}
            value={this.props.name}
          />
        </StyledDiv>
      </Fragment>
    );
  }
}

Person.propTypes = {
  clickPerson: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changePerson: PropTypes.func,
};

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
