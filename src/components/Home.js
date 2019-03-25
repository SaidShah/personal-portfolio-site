import React from 'react';
import welcome from '.././images/welcome-image.png'
import Bounce from 'react-reveal/Bounce'
import Progress from './Progress'
import Flip from 'react-reveal/Flip'
import About from './About'


const Home = () => (

  <>
  <div>
    <Bounce left>
    <img src={welcome} alt="welcome" className="welcome" id="img"></img>
    </Bounce>
  </div>

  <div className="about" id="about">
      <About/>
  </div>
  <div>

  <div className="row">
  <Flip right>
    <div className="column-left">
        <h1 className="bold-text">Proficiency</h1>
    </div>
  </Flip>
  </div>

  <Progress/>


  </div>
  </>
);

export default Home
