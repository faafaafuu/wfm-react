import React, { Component } from 'react';
import Car from './components/car';

class App extends Component {
  state={
    cars:[
      {name: 'Audi', year:"2014"},
      {name:'BMW', year:"2015" },
      {name:'Mersedess', year:"2016" }
    ],
    pageTitle: 'React components'
  };

  onChangeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle 
    })
  }
  render() {
    const cars = this.state.cars
    
    return (
      <div className="App" >
        <h4>{this.state.pageTitle}</h4>
        <button onClick={this.onChangeTitleHandler.bind(this, "Changed")}>Change state</button>
        <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.onChangeTitleHandler.bind(this, cars[0].name)} />
        <Car name={cars[1].name} year={cars[1].year} onChangeTitle={this.onChangeTitleHandler.bind(this, cars[1].name)}/>
        <Car name={cars[2].name} year={cars[2].year} onChangeTitle={this.onChangeTitleHandler.bind(this, cars[2].name)}/>
      </div>
    );
  }
}

export default App;
