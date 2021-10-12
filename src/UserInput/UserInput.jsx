import "./UserInput.css";

export default function UserInput(props) {
  return (
    <div className="Input">
      <input type="text" value={props.username} onChange={props.changeUsername} />
    </div>
  );
}
