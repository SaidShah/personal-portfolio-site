import React, { Component } from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import welcome from './images/welcome-image.png'
import Bounce from 'react-reveal/Bounce'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="sticky">
        <Bounce right>
        <Navbar/>
        </Bounce>
      </div>
      <div>
        <Bounce left>
        <img src={welcome} alt="welcome" className="welcome"></img>
        </Bounce>
      </div>
      <div className="about" id="about">
          <About/>
      </div>
      </div>
    );
  }
}

export default App;
