import React from 'react';
import Reveal from 'react-reveal/Reveal'
import Flip from 'react-reveal/Flip'

const About = () => (
  <div className="row">
  <Flip right>
    <div className="column-left">
        <h1 className="bold-text">About</h1>
    </div>
  </Flip>
  <Reveal effect="fadeInUp">
    <div className="column-right">
        <p className="about-p">My name is Said Bashir Shah. I am a graduate of Flatiron Schools Coding Bootcamp and I have also attended Suffolk County Community College for Information Systems. My love for code began as soon as I wrote my first "hello world" program in Processing. I am a member of the Phi Theta Kappa Honors Society and have been on the dean's list since my first semester in college. Although my major was Information Technology, my favorite hobby is writing code.</p>

        <p className="about-p">I enjoy Hackathons, contributing to open source and taking on challenging tasks that require collaboration, creative problem solving and team work. I love computers and everything that has to do with them. I would like to work on a great team because I enjoy being surrounded by supportive and creative thinking developers. I am proficient in Java, .Net Framework, MySQL, HTML, Ruby, Rails, Javascript, React and Redux.</p>

        <p className="about-p">This website was created using React, Javascript, CSS and MDBootstrap. Please feel free to look at my Linked In profile, my GitHub repositories, or just email me if you would like to get in touch. The links are above right under my name in the header of this page. Just click on the icons. I have posted videos below from some of the projects I have completed. Below is a chart of my skill level in each programming language.</p>
    </div>
  </Reveal>

</div>
);

export default About;
