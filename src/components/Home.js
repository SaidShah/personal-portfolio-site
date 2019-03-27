import React from 'react';
import welcome from '.././images/welcome-image.png'
import Bounce from 'react-reveal/Bounce'
import Progress from './Progress'
import Flip from 'react-reveal/Flip'
import Spin from 'react-reveal/Spin'
import Jello from 'react-reveal/Jello'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'


const Home = () => (

  <>
  <div>
    <Bounce left>
    <img src={welcome} alt="welcome" className="welcome" id="img"></img>
    </Bounce>
    <h1 className="my-name">Said B Shah</h1>
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


  <div  id="experience">
  <div className="row">
    <div className="column-left">
    <Spin>
        <h1 className="bold-text">Experience</h1>
    </Spin>
    </div>
  </div>
    <Experience/>
  </div>

  <div  id="recent">
  <div className="row">
    <div className="column-left">
    <Jello>
        <h1 className="bold-text">Recent Projects</h1>
    </Jello>
    </div>
  </div>
    <Projects/>
  </div>

  </>
);

export default Home
