import React from 'react';
import resume from '.././images/resume-image.png'
import Bounce from 'react-reveal/Bounce'

const Resume = () => (
  <>
  <div>
    <Bounce left>
    <img src={resume} alt="resume said shah" className="welcome" id="img"></img>
    </Bounce>
  </div>

  </>
);

export default Resume;
