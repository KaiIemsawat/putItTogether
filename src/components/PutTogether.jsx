import React, { useState } from "react";

const PutTogether = (props) => {
    const { firstName, lastName, hairColor, initAge } = props;
    const [age, setAge] = useState( initAge );

    return (
        <div className="container">
            <h1>{ lastName }, { firstName }</h1>
            <p>Age : { age }</p>
            <p>Hair Color : { hairColor }</p>
            <button onClick={ (event) => setAge(age + 1) } className="btn btn-secondary">
                Birthday Button for { firstName } { lastName }
            </button>
        </div>
    )
}

export default PutTogether;