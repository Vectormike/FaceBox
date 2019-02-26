import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageForm from './components/ImageForm/ImageForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css' 

// Saved api key as app
const app = new Clarifai.App({
  apiKey: '03a416607bf24a56837f89e9744b5ea5'
 });


class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  // Face Location box calculator
  calculateFaceLocation = (data) => {
    //Init responses from api 
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      
    }
  }

  //Input change event on Input field
  OnInputChange = (event) => {
    //Set imageUrl state when event is triggered
    this.setState({input: event.target.value})
  }

  //Event for onClick button
  onButtonSubmit = () => {
    //Set input 
    this.setState({imageUrl: this.state.input})

    //Trigger predict model
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input 
    )
    .then(response => this.calculateFaceLocation(response))
    .catch(err => console.log(err, 'Error on predict model'))
  }    
  


  render() {
    let image;
    (this.state.imageUrl.length === 0) ?
    image = <p className='bg-gray br3 f3 grow dim pa2 ma5'>Your image will show here, mate</p> :
    image = <FaceRecognition imageUrl={this.state.imageUrl}/>


    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageForm 
          onButtonSubmit={this.onButtonSubmit} 
          OnInputChange={this.OnInputChange}/>
        {image}        
      </div>
    );
  }
}

export default App;
   