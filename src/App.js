import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageForm from './components/ImageForm/ImageForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css' 


const app = new Clarifai.App({
  apiKey: '03a416607bf24a56837f89e9744b5ea5'
 });


class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  

  OnInputChange = (event) => {
    //Set imageUrl state when event is triggered
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    //Set input 
    this.setState({imageUrl: this.state.input})
    //Trigger predict model
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input )
    .then(
    function(response) {
      // do something with response
      console.log(response, `Face`)
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
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
   