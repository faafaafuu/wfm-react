import React, { Component } from 'react';
import Car from './components/car';
import './App.scss'

class App extends Component {
  state={
    cars:[
      {name: 'Audi', year:"2014"},
      {name:'BMW', year:"2015" },
      {name:'Mersedess', year:"2016" }
    ],
    pageTitle: 'React components',
    showCars: false
  };
  
  onChangeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle 
    })
  }

  deleteHandler(i) {
    const cars = [...this.state.cars];
    cars.splice(i,1)
    this.setState({cars})

  }

  onChangeName = (name, i) => {
    //получаем нужный элемент
    const car = this.state.cars[i];
    car.name = name;
    // клонирование (новый массив)
    const cars = [...this.state.cars]
    cars[i] = car
    // меняем массив
    this.setState({cars})
  }
  
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    let cars = null;
    if(this.state.showCars) {
      cars = 
          this.state.cars.map((e, i) => {
        return (<Car 
                  key={i} 
                  name={e.name} 
                  year={e.year} 
                  onDelete={this.deleteHandler.bind(this, i)}
                  onChangeName={ev => this.onChangeName(ev.target.value, i)}
                />)
      })
    }

    return (
      <div className="App" >
        <h4>{this.state.pageTitle}</h4>
        <button className={"Btn btn"} onClick={this.toggleCarsHandler}>Show</button>
        {cars}
      </div>
    );
  }
}

export default App;
