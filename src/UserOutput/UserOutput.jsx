import "./UserOutput.css";

export default function UserOutput(props) {
  return (
    <div>
      <p>This is the first paragraph {props.username}</p>
      <p>Second paragraph</p>
    </div>
  );
}
