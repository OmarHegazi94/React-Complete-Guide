import "./Person.css";

const person = (props) => {
  console.log(props);
  return (
    <div className="Person">
      <p onClick={props.clickPerson}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changePerson} value={props.name} />
    </div>
  );
};

export default person;
