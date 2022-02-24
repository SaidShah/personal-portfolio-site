import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Bounce from 'react-reveal/Bounce'
import Nft from './components/Nft';
import {withRouter, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="sticky">
        <Bounce right>
        <Navbar/>
        </Bounce>
      </div>
      <Switch>
      <Route path="/nft" render={()=><Nft/>}/>
      <Route path="/resume" render={()=><Resume/>}/>
      <Route path="/" render={()=><Home/>}/>
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
