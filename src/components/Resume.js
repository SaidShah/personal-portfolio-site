import React from 'react';
import resume from '.././images/resume-image.png'
import Bounce from 'react-reveal/Bounce'
import Rotate from 'react-reveal/Rotate';
import Jello from 'react-reveal/Jello';
import Spin from 'react-reveal/Spin';
import Wobble from 'react-reveal/Wobble';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

const Resume = () => (
  <>
  <div>
    <Bounce left>
    <img src={resume} alt="resume said shah" className="welcome" id="img"></img>
    </Bounce>
    <div>
      <h1 className="text-center">Said B Shah</h1>
    </div>
    <hr className="resume-hr"/>
  </div>

<Rotate top left>
  <div className="resume-h5-div">
  <h5 className="font-title">Creative, technically skilled and dedicated full-stack developer. Seeking a position where I can contribute using
      my proficiency and knowledge in developing full scale applications.</h5>
  </div>
</Rotate>

  <div className="resume-h5-div">
<Jello>
  <h4 className="resume-topics">Technical Skills:</h4>
</Jello>
<Spin>
    <ul className="font-1-5">
      <li>Java, JavaFX, Linux, C#, Ruby, React, Redux, .Net Framework, Git, JavaScript & Rails</li>
      <li>HTML, CSS, Gimp, Bootstrap & Material UI</li>
      <li>MySQL, Active Record & Postgresql</li>
      <li>Eclipse, IntelliJ, NetBeans, & Visual Studio</li>
      <li>Data Structures & Algorithms (online certification)</li>
    </ul>
</Spin>
<Jello>
    <h4 className="resume-topics">Recent Projects:</h4>
</Jello>
    <div className="projects-div-resume">
    <Spin>
      <h5 className="resume-topics-names">Zain Learn English Platform <span><a href="https://drive.google.com/file/d/1ciDRo4IPjUc1DWWexywYvL780kOJzOmV/view" target="_blank" rel="noopener noreferrer">Zain (Demo) </a></span><span> Github: </span><span><a href="https://github.com/SaidShah/learn-english-frontend" target="_blank" rel="noopener noreferrer">Front-end </a> </span> <span><a href="https://github.com/SaidShah/learn-english-backend" target="_blank" rel="noopener noreferrer"> Back-end</a></span></h5>
    <ul className="font-1-5">
      <li>Language & Framework: Google Dialog Flow, Rails, React and JWT user authentication</li>
      <li>A website where users can log on and learn english through speech.</li>
    </ul>
    </Spin>
    <Wobble>
    <h5 className="resume-topics-names">Ticker Stock Market Simulator <span><a href="https://drive.google.com/file/d/11fg70lLAAIqlK5Us3Tm-HmQj92QWWQyl/view" target="_blank" rel="noopener noreferrer">Ticker (Demo) </a></span><span> Github: </span><span><a href="https://github.com/SaidShah/ticker_front_end" target="_blank" rel="noopener noreferrer">Front-end </a> </span> <span><a href="https://github.com/SaidShah/ticker_back_end" target="_blank" rel="noopener noreferrer"> Back-end</a></span></h5>
  <ul className="font-1-5">
    <li>Language & Framework: Ruby, Rails, & React</li>
    <li>Real time stock data & quotes, search, buy, sell & JWT user authentication.</li>
  </ul>
  </Wobble>

  <Spin>
  <h5 className="resume-topics-names">College Faculty/Student Application <span><a href="https://drive.google.com/file/d/1YDn2_hQaDfKOcPZQoZydVHy838d_tcPW/view" target="_blank" rel="noopener noreferrer">College App (Demo) </a></span><span> Github: </span><span><a href="https://github.com/SaidShah/java-college-blackboard-app" target="_blank" rel="noopener noreferrer">View on Github </a> </span></h5>
<ul className="font-1-5">
  <li>Language & Framework: Java & JavaFx</li>
  <li>Includes all blackboard functionality, used by admin, professors, & students.</li>
</ul>
</Spin>

<Wobble>
<h5 className="resume-topics-names">Smart Text Editor <span><a href="https://drive.google.com/file/d/1lHXZ0KXZa9iMt5VX5DFY4Ovt4Oigwc7J/view" target="_blank" rel="noopener noreferrer">Text Editor (Demo) </a></span><span> Github: </span><span><a href="https://github.com/SaidShah/java-smart-text-editor" target="_blank" rel="noopener noreferrer">View on Github </a> </span></h5>
<ul className="font-1-5">
<li>Language & Framework: Java & Javafx, Linked Lists & Hashes</li>
<li>Uses machine learning to suggest next words and has real time spell checking.</li>
</ul>
</Wobble>


<Spin>
<h5 className="resume-topics-names">Pong - Ping Pong Game <span><a href="https://drive.google.com/file/d/1aQE1m7x7s1X5I-22OKJzDFB91aHTVNIr/view" target="_blank" rel="noopener noreferrer">Pong (Demo) </a></span><span> Github: </span><span><a href="https://github.com/SaidShah/Pong" target="_blank" rel="noopener noreferrer">View on Github </a> </span></h5>
<ul className="font-1-5">
<li>Language & Framework: Ruby, Rails, Activerecord, Javascript, & P5.js</li>
<li>JWT user authentication as well as 1 player, 2 player, & AI gameplay.</li>
</ul>
</Spin>
  </div>

<Jello>
  <h4 className="resume-topics">Education:</h4>
</Jello>
  <div className="projects-div-resume">

  <Zoom left>
  <h5 className="resume-topics-names">Flatiron School Coding Boot Camp <span><p> Brooklyn, NY 10/18 - 01/25/2019</p></span></h5>
  <ul className="font-1-5">
  <li>Full Stack Web Development Program</li>
  <li>Built multiple end-to-end web applications.</li>
  <li>Gained thorough understanding of React, Redux, JavaScript, Ruby, Rails & Git.</li>
  </ul>
  </Zoom>

  <Spin>
  <h5 className="resume-topics-names">Suffolk County Community College <span><p> Brentwood, NY 01/2016 - 09/2018</p></span></h5>
  <ul className="font-1-5">
  <li>Degree in Information Technology - Honors</li>
  <li>SCCC Computer Science-Technology Award 2017-2018</li>
  <li>Member of Phi Theta Kappa Honors Society</li>
  </ul>
  </Spin>

  <Wobble>
  <h5 className="resume-topics-names">Baran Institute of Technology <span><p> Windsor Locks, CT 07/2003 - 08/2004</p></span></h5>
  <ul className="font-1-5">
  <li>Completed 78 credits within 1-year for Auto Collision and Paint.</li>
  <li>Received 7 certifications in various aspects of auto body repair.</li>
  </ul>
  </Wobble>
  </div>

<Jello>
  <h4 className="resume-topics">Work History:</h4>
</Jello>
  <div className="projects-div-resume">

  <Zoom right>
  <h5 className="resume-topics-names">Freelance Web Developer <span><p> Five Boroughs, NY 09/2018 - Present</p></span></h5>
  <ul className="font-1-5">
  <li>Built multiple end-to-end websites in React, Javascript, Java, Ruby and Rails.</li>
  <li>Collaborated with IT staff to implement specific requirements.</li>
  <li>Designed optimized websites, with best practices for SEO, speed and user experience.</li>
  </ul>
  </Zoom>

  <Wobble>
  <h5 className="resume-topics-names">Self Employed, Transportation  <span><p> Five Boroughs, NY 06/2015 - 08/2018</p></span></h5>
  <ul className="font-1-5">
  <li>Worked rotating shifts seven days a week while going to college full-time and maintaining a 4.0 GPA.</li>
  <li>Coordinated with dispatchers, customer service representatives, office personnel and customers.</li>
  <li>Completed daily paperwork and trip logs.</li>
  </ul>
  </Wobble>

<Spin>
  <h5 className="resume-topics-names">My 3 Sons Vending   <span><p> New Hyde Park, NY 04/2014 - 06/2015</p></span></h5>
  <ul className="font-1-5">
  <li>Communicated and coordinated between clients, vendors and other associates to streamline deliveries.</li>
  <li>Trained in response to emergency situations related to CDL Owners Operators.</li>
  <li>Planned routes of delivery sites to be visited and ensured the fastest and least expensive service.</li>
  </ul>
</Spin>

<Roll left>
  <h5 className="resume-topics-names">Owner/Operator JR’s Coffee Catering    <span><p> Syosset, NY 08/2007 - 09/2013</p></span></h5>
  <ul className="font-1-5">
  <li>Resolved customer issues concerning products and equipment.</li>
  <li>Maintained accurate records of truck inventory and product movement.</li>
  <li>Monitored shelf life and sales of products to minimize spoilage and losses.</li>
  <li>Collected payments and informed customers about new products.</li>
  </ul>
</Roll>


  </div>

  </div>

  </>
);

export default Resume;
