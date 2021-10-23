import React from 'react'
import Person from './Person/Person.jsx'

export default function Persons({ persons, clicked, changed }) {
    // console.log(props);
    return (
        persons.map((person, index) => {
            return (
                <Person
                    clickPerson={() => clicked(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changePerson={(event) => changed(event, person.id)}
                />
            );
        })
    )
}
