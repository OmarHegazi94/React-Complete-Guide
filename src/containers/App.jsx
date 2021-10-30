import React, {Component} from "react";
// import styled from "styled-components/macro";
import classes from "./App.module.css";
// import Person from "../components/Persons/Person/Person.jsx";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
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

    // YOU CALL SET STATE Syncrunislly but it's not garanteed to finish immediatly because react controls when to update it based on free resources
    this.setState((prevState, currentProps) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
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

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({showCockpit: false});
          }}>
          show cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              togglePerson={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app'))
}

export default withClass(App, classes.App);
