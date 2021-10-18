import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person.jsx";

class App extends Component {
  state = {
    persons: [
      {name: "Omar", age: 24},
      {name: "Max", age: 77},
      {name: "KOKO", age: 55},
    ],
    otherState: "some other state here",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: "Max", age: 77},
        {name: "BOBO", age: 55},
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Omar", age: 24},
        {name: event.target.value, age: 77},
        {name: "BOBO", age: 55},
      ],
    });
  };

  render() {
    // scoped styles
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <button onClick={() => this.switchNameHandler("Max koko")} style={style}>
          Switch name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickSecondPerson={this.switchNameHandler.bind(this, "New koko")}
          changeName={this.nameChangedHandler}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app'))
}

export default App;
