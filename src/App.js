import React, { Component } from 'react';
import Car from './components/car';

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
                  onChangeTitle={this.onChangeTitleHandler.bind(this, e.name)}/>)
      })
    }

    return (
      <div className="App" >
        <h4>{this.state.pageTitle}</h4>
        <button onClick={this.toggleCarsHandler}>Show</button>
        {cars}
      </div>
    );
  }
}

export default App;
