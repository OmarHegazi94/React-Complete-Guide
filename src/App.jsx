import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person.jsx";

class App extends Component {
  state = {
    persons: [
      {id: "gewgew", name: "Omar", age: 24},
      {id: "vgweasc", name: "Max", age: 77},
      {id: "bwergew", name: "KOKO", age: 55},
    ],
    otherState: "some other state here",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                clickPerson={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changePerson={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clickSecondPerson={this.switchNameHandler.bind(this, "New koko")}
            changeName={this.nameChangedHandler}>
            My Hobbies: Racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Perons
        </button>

        {persons}
      </div>
    );
  }
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app'))
}

export default App;
