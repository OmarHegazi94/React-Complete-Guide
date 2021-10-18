import "./Person.css";

const person = (props) => {
  console.log(props);
  return (
    <div className="Person">
      <p onClick={props.clickSecondPerson}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  );
};

export default person;
