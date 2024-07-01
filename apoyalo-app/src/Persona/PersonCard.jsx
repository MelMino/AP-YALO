import React from 'react';
const PersonCard = (props) => {
    console.log(props);
    return(
        <>
        <h3>{props.firstName} {props.lastName}</h3>
        <p>Age: {props.age}</p>
        <p>Hair Color {props.hairColor}</p>

        </>
    );
}

export default PersonCard;