import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageForm from './components/ImageForm/ImageForm'
import './App.css' 


const app = new Clarifai.App({
  apiKey: '03a416607bf24a56837f89e9744b5ea5'
 });


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
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      // there was an error
      console.log(err, `There was an error`)
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageForm onButtonSubmit={this.onButtonSubmit} OnInputChange={this.OnInputChange}/>
      </div>
    );
  }
}

export default App;
   