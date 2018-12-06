import React from 'react';
import './car.scss' 

export default props => {
    return (
        <div className="cars">
            <h3>Car name: {props.name}</h3>
            <p>Car yerar: {props.year}</p>
            <button onClick={props.onDelete}>Delete</button>
            <input onChange={props.onChangeName } placeholder={props.name}></input>
        </div>
    )
}