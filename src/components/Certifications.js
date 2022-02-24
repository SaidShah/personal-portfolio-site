import React from 'react';
import Reveal from 'react-reveal/Reveal'
import Flip from 'react-reveal/Flip'

const Certifications = () => (
  <div className="row">
  <Flip right>
    <div className="column-left">
        <h1 className="bold-text">Certifications</h1>
    </div>
  </Flip>
  <Reveal effect="fadeInUp">
    <div className="column-right">
        <a href="https://www.credly.com/badges/fc8cff41-e938-4547-aef9-921c8d758b9d/public_url" style={{fontSize: '20px'}} target="_blank" rel="noreferrer noopener">Click To Verify Certification on Credly</a>
        <img src={require("../images/aws-certification.png")} style={{width: '100%', paddingTop: '30px'}} alt="aws certification logo"/>
    </div>
  </Reveal>

</div>
);

export default Certifications;