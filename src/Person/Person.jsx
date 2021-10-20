// import "./Person.css";
import styled from "styled-components/macro";

const person = (props) => {
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
  return (
    <StyledDiv>
      <p onClick={props.clickPerson}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changePerson} value={props.name} />
    </StyledDiv>
  );
};

export default person;
