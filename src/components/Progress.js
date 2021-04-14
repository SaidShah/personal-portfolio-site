import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import { MDBProgress } from 'mdbreact';

const Progress = () => (
  <>
  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={78} className="my-2 my-progress"/>
  <h3 className="progress-h1">.NET Core: 78%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={78} className="my-2 my-progress"/>
  <h3 className="progress-h1">C#: 78%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={94} className="my-2 my-progress"/>
  <h3 className="progress-h1">TypeScript: 94%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={94} className="my-2 my-progress"/>
  <h3 className="progress-h1">React: 94%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={84} className="my-2 my-progress"/>
  <h3 className="progress-h1">React Native: 84%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={90} className="my-2 my-progress"/>
  <h3 className="progress-h1">JS: 90%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={85} className="my-2 my-progress"/>
  <h3 className="progress-h1">SQL: 85%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={90} className="my-2 my-progress"/>
  <h3 className="progress-h1">HTML5: 90%</h3>
  </div>
  </LightSpeed>

  <LightSpeed left>
  <div className="progress-row">
  <MDBProgress value={80} className="my-2 my-progress"/>
  <h3 className="progress-h1">SCSS: 80%</h3>
  </div>
  </LightSpeed>



  </>
);

export default Progress;
