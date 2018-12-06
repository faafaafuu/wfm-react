import React from 'react';
import './car.css' 

export default props => {
    return (
        <div className="cars">
            <h3>Car name: {props.name}</h3>
            <p>Car yerar: {props.year}</p>
            <button onClick={props.onChangeTitle}></button>
        </div>
    )
}