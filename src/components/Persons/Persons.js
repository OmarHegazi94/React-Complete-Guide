import React, { PureComponent } from 'react'
import Person from './Person/Person.jsx'

export default class Persons extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {}
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js getDerivedStateFromProps');
    //     return state;
    // }

    // if you need to check all props use pure components instead
    // shouldComponentUpdate(nextProps, nextState) {
    //     // must return true or false
    //     console.log('Persons.js shouldComponentUpdate');
    //     // Here we compare 2 pointers to 2 different arrays
    //     // Whenever you update the state you must do so with a copy not the actual state
    //     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // After rendering
    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // After rendering
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('Persons.js componenet will unmount');
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
