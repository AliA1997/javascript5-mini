import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars.map(c => {
          return <div key={c.id}>
                  <h4>Make: {c.make}, Model: {c.model}</h4>
                  <h4>Color: {c.color} Year: {c.year}</h4>
                </div>
        })}
      </div>
    );
  }
}

export default App;
