import React, {Component} from "react";
import styled from "styled-components/macro";
import classes from "./App.module.css";
import Person from "./Person/Person.jsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  clickPerson={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  changePerson={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <StyledButton alt={this.state.showPersons.toString()} onClick={this.togglePersonsHandler}>
          Toggle Perons
        </StyledButton>

        {persons}
      </div>
    );
  }
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app'))
}

export default App;
