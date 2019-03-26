import React from 'react';
import welcome from '.././images/welcome-image.png'
import Bounce from 'react-reveal/Bounce'
import Progress from './Progress'
import Flip from 'react-reveal/Flip'
import Spin from 'react-reveal/Spin'
import About from './About'
import Experience from './Experience'


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


  <div>
  <div className="row" id="experience">
    <div className="column-left">
    <Spin>
        <h1 className="bold-text">Experience</h1>
    </Spin>
    </div>
  </div>
    <Experience/>
  </div>

  </>
);

export default Home