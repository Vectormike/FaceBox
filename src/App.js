import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageForm from './components/ImageForm/ImageForm'
import './App.css' 

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  OnInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('Click!')
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageForm onButtonSubmit={this.OnButtonSubmit} OnInputChange={this.OnInputChange}/>
      </div>
    );
  }
}

export default App;
   