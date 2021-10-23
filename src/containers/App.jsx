import React, {Component} from "react";
// import styled from "styled-components/macro";
import classes from "./App.module.css";
// import Person from "../components/Persons/Person/Person.jsx";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
    // this.state = {} // same as below it will be done for you anyway
  }
  state = {
    persons: [
      {id: "gewgew", name: "Omar", age: 24},
      {id: "vgweasc", name: "Max", age: 77},
      {id: "bwergew", name: "KOKO", age: 55},
    ],
    otherState: "some other state here",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate");
    console.log(...arguments);
    return true;
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }

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
    console.log("App.js render");
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
        <>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
          {/* {this.state.persons.map((person, index) => {
            return (
              // <ErrorBoundary key={person.id}>
              <Person
                key={person.id}
                clickPerson={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changePerson={(event) => this.nameChangedHandler(event, person.id)}
              />
              // </ErrorBoundary>
            );
          })} */}
        </>
      );

      // style.backgroundColor = "red";
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          togglePerson={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app'))
}

export default App;
