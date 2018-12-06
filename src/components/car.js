import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './car.scss' 

export default class Car extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, stateProps) {
        console.log('Car shouldComponentUpdate', nextProps, stateProps);
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, stateProps) {
        console.log('Car componentWillUpdate', nextProps, stateProps)
    }
    // тоже самое что и componentWillUpdate только запрещает работу с преобразованием state напрямую
    static getDerivedStateFromProps(nextProps, prevState) {
         console.log('Car getDerivedStateFromProps', nextProps,prevState);
        return prevState;
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    render() {
        console.log('Car render')
        return (
            <div className="cars">
                <h3>Car name: {this.props.name}</h3>
                <p>Car yerar: {this.props.year}</p>
                <button onClick={this.props.onDelete}>Delete</button>
                <input onChange={this.props.onChangeName } placeholder={this.props.name}></input>
            </div>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number
}
