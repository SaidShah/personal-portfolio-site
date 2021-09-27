import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

const Progress = () => (
  <>
  <LightSpeed left>
  <div className="progress-row">
    <div className="tech-logo-container">
      <img src={require("../images/csharp.png")} className="tech-logo" alt="csharp logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/docker.png")} className="tech-logo" alt="docker logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/react.png")} className="tech-logo" alt="react logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/typescript logo.png")} className="tech-logo" alt="typescript logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/css.png")} className="tech-logo" alt="css logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/aws.png")} className="tech-logo" alt="aws logo"/>
    </div>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
    <div className="tech-logo-container">
      <img src={require("../images/dot-net-core.png")} className="tech-logo" alt="dot net core logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/html.png")} className="tech-logo" alt="html logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/javascript.png")} className="tech-logo" alt="javascript logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/jest.jpeg")} className="tech-logo" alt="jest logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/mySql.png")} className="tech-logo" alt="my sql logo"/>
    </div>
    <div className="tech-logo-container">
      <img src={require("../images/git.png")} className="tech-logo" alt="git logo"/>
    </div>
  </div>
  </LightSpeed>
  </>
);

export default Progress;
