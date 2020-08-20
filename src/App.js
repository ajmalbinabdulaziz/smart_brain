import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    // app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    //   function(response) {
    //     // do something with response
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
  }


  render() {
    return(
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLink 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
