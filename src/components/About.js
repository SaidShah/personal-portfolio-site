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
        <p className="about-p">My name is Said Bashir Shah and I'm a software engineer on a great team at a great 
        company called Capital One. I am a graduate of Flatiron Schools Coding Bootcamp and I also have a Bachelors 
        Degree in Information Technology from Purdue University. My love for code began as soon as I wrote my first "hello world" 
        program in Processing. I am a member of the Phi Theta Kappa Honors Society and was on the deans list every semester in college. 
        Although my major was Information Technology, my passion is writing code.</p>

        <p className="about-p">I enjoy Hackathons, contributing to open source and taking on challenging tasks that require collaboration, 
        creative problem solving and team work. I love computers and everything that has to do with them. I am proficient in Java, C#, .Net Core Framework, 
        TypeScript, React, React Native, SCSS, LESS, MySQL, HTML, JavaScript and Redux.</p>

        <p className="about-p">This website was created using React, Javascript, CSS and MDBootstrap. Please feel free to look at my Linked In 
        profile, my GitHub repositories, or just email me if you would like to get in touch. The links are above right under my name in the 
        header of this page. I have posted videos below from some of some personal projects I have built. Below is a chart of my skill level in 
        each programming language.</p>
    </div>
  </Reveal>

</div>
);

export default About;
