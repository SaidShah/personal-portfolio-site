import React from 'react';
import Slide from 'react-reveal/Slide';
import zain from '.././videos/zain-min.mp4'
import zainog from '.././videos/zain.ogg'
import pong from '.././videos/pong-min.mp4'
import pongog from '.././videos/pong.ogg'
import textEdit from '.././videos/textEdit-min.mp4'
import textEditOg from '.././videos/textEdit.ogg'
import ticker from '.././videos/ticker-min.mp4'
import tickerOg from '.././videos/ticker.ogg'
import blackboard from '.././videos/blackboard-min.mp4'
import blackboardOg from '.././videos/blackboard.ogg'

const Projects = () => (

  <>
    <div className="experience-row">


    <Slide left>
      <div className="video-div">
        <video className="video-tag" controls>
          <source src={zain} type="video/mp4"/>
          <source src={zainog} type="video/ogg"/>
        </video>
        <h2 className="experience-h1 text-center">Zain Learn English Platform</h2>
        <h4 className="experience-h1 ">Front-End: <span className="white-text">React, Javascript, HTML, CSS & Bootstrap</span></h4>
        <h4 className="experience-h1 ">Back-End: <span className="white-text">Rails, JWT Auth & Redux</span></h4>
        <h4 className="experience-h1 ">Description: <span className="white-text">This is a website that uses Google's Dialogflow AI api. It is geared towards people who would like to learn how to speak english. It uses React Speech Recognition for the speech to text. Most of the application can be used by speech.</span></h4>
      </div>
    </Slide>



    <Slide right>
      <div className="video-div-gray">
        <video className="video-tag" controls>
          <source src={pong} type="video/mp4"/>
          <source src={pongog} type="video/ogg"/>
        </video>
        <h2 className="experience-h1 text-center">Pong - Ping Pong Game</h2>
        <h4 className="experience-h1 ">Front-End: <span className="bl-txt">Javascript, HTML, CSS & Bootstrap</span></h4>
        <h4 className="experience-h1 ">Back-End: <span className="bl-txt">Rails</span></h4>
        <h4 className="experience-h1 ">Description: <span className="bl-txt">Can be played 1 player, 2 player or you can just watch the computer play.</span></h4>
      </div>
    </Slide>

    <Slide left>
      <div className="video-div">
        <video className="video-tag" controls>
          <source src={textEdit} type="video/mp4"/>
          <source src={textEditOg} type="video/ogg"/>
        </video>
        <h2 className="experience-h1 text-center">Smart Text Editor Using Machine Learning</h2>
        <h4 className="experience-h1 ">Front-End: <span className="white-text">Java & JavaFX</span></h4>
        <h4 className="experience-h1 ">Back-End: <span className="white-text">Linked list & Hashmap</span></h4>
        <h4 className="experience-h1 ">Description: <span className="white-text">This application is a smart text editor which uses machine learning to learn the way you type, it recommends words based on your previous word and it also has a spell checker This application can generate text based on the words you have already typed. It trains itself with the words which are present in the text area or you can train it using any text document, then it can provide you with a generated text based on a word of your choice and the number of words you would like. It also implements real time spell checking as well as word suggestions based on your typed word, in real time. It also provides you with a word count, sentence count and a flesch score</span></h4>
      </div>
    </Slide>



        <Slide right>
          <div className="video-div-gray">
            <video className="video-tag" controls>
              <source src={ticker} type="video/mp4"/>
              <source src={tickerOg} type="video/ogg"/>
            </video>
            <h2 className="experience-h1 text-center">Ticker Stock Market Simulator</h2>
            <h4 className="experience-h1 ">Front-End: <span className="bl-txt">React, Javascript, HTML, CSS & Bootstrap</span></h4>
            <h4 className="experience-h1 ">Back-End: <span className="bl-txt">Rails, JWT Auth & Redux</span></h4>
            <h4 className="experience-h1 ">Description: <span className="bl-txt">This is a stock markete simulator game. You will be provided with $10,000 upon signing up and you can use those funds to buy/sell stocks. The end goal is to make money and not lose money. The stock ticker and live quotes are fetched from Robinhood and Intrino api's.</span></h4>
          </div>
        </Slide>

        <Slide left>
          <div className="video-div">
            <video className="video-tag" controls>
              <source src={blackboard} type="video/mp4"/>
              <source src={blackboardOg} type="video/ogg"/>
            </video>
            <h2 className="experience-h1 text-center">College Blackboard App</h2>
            <h4 className="experience-h1 ">Front-End: <span className="white-text">Java & JavaFX</span></h4>
            <h4 className="experience-h1 ">Back-End: <span className="white-text">Array & Hashmap</span></h4>
            <h4 className="experience-h1 ">Description: <span className="white-text">This is a college blackboard application which uses Java for the backend and JavaFx for the GUI. This application can be used as a school website by students and faculty to perform multiple tasks. It has a login page, create account page, as well as many other pages. It a perfect example of Object Oriented Programming</span></h4>
          </div>
        </Slide>

    </div>
    </>
);

export default Projects;
