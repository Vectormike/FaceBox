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
      imageUrl: ''
    }
  }

  

  OnInputChange = (event) => {
    //Set imageUrl state when event is triggered
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    //Set input 
    this.setState(
      {imageUrl: this.state.input}
    )

    //Trigger predict model
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input 
    )
    .then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box, `Face`)
    },
    function(err) {
      // there was an error
      console.log(err, `There was an error`)
    }
  );
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
        <ImageForm onButtonSubmit={this.onButtonSubmit} OnInputChange={this.OnInputChange}/>
        {image}        
      </div>
    );
  }
}

export default App;
   