import React, {Component} from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput.jsx";
import UserOutput from "./UserOutput/UserOutput.jsx";

class App extends Component {
  state = {
    username: "Omar Hegazi!!!!!",
  };

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      border: "1px solid #ccc",
      margin: "20px auto",
      boxShadow: "0 0 10px #ccc",
    };

    return (
      <div className="App">
        <button style={style} onClick={this.handleUsername}>
          Change state
        </button>
        <UserInput username={this.state.username} changeUsername={this.handleUsername} />

        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput />

        <ol style={{marginTop: "100px"}}>
          <li style={{textDecoration: "line-through"}}>Create TWO new components: UserInput and UserOutput</li>
          <li style={{textDecoration: "line-through"}}>
            UserInput should hold an input element, UserOutput two paragraphs
          </li>
          <li style={{textDecoration: "line-through"}}>
            Output multiple UserOutput components in the App component (any paragraph texts of your choice)
          </li>
          <li style={{textDecoration: "line-through"}}>
            Pass a username (of your choice) to UserOutput via props and display it there
          </li>
          <li style={{textDecoration: "line-through"}}>
            Add state to the App component (=> the username) and pass the username to the UserOutput component
          </li>
          <li style={{textDecoration: "line-through"}}>
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li style={{textDecoration: "line-through"}}>
            Pass the event-handler method reference to the UserInput component and bind it to the input-change event
          </li>
          <li style={{textDecoration: "line-through"}}>
            Ensure that the new input entered by the user overwrites the old username passed to UserOutput
          </li>
          <li style={{textDecoration: "line-through"}}>
            Add two-way-binding to your input (in UserInput) to also display the starting username
          </li>
          <li style={{textDecoration: "line-through"}}>
            Add styling of your choice to your components/ elements in the components - both with inline styles and
            stylesheets
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
