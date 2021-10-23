import React, { Component } from 'react'
import Person from './Person/Person.jsx'

export default class Persons extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Persons.js getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // must return true or false
        console.log('Persons.js shouldComponentUpdate');
        return true;
    }

    // After rendering
    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        console.log(arguments);
        return { message: 'Snapshot!' };
    }

    // After rendering
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('Persons.js rendering...');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        clickPerson={() => this.props.clicked(index)}
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        changePerson={(event) => this.props.changed(event, person.id)}
                    />
                );
            })
        )
    }
}
