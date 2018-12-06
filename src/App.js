import React, { Component } from 'react';
import Car from './components/car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.scss'
import Counter from './Counter/Counter'

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

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }
  // Позволяет получить  неизмененное дом дерево до обновления
  getSnapshotBeforeUpdate() {
    console.log('App getSnapshotBeforeUpdate')
  }
  
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
    if(Math.random() > 0.7) {
      throw new Error('Car random failed')
    }
    console.log('App render')
    let cars = null;
    if(this.state.showCars) {
      cars = 
          this.state.cars.map((e, i) => {
        return (
          <ErrorBoundary key={i}>
            <Car 
                  name={e.name} 
                  year={e.year} 
                  onDelete={this.deleteHandler.bind(this, i)}
                  onChangeName={ev => this.onChangeName(ev.target.value, i)}
                />
          </ErrorBoundary>        
        )
      })
    }

    return (
      <div className="App" >
      <Counter/> 
        <h4>{this.state.pageTitle}</h4>
        <button className={"Btn btn "} onClick={this.toggleCarsHandler}>Show</button>
        {cars}
      </div>
    );
  }
}

export default App;
