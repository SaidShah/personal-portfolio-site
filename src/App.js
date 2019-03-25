import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Resume from './components/Resume'
import Bounce from 'react-reveal/Bounce'
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
      <Route path="/resume" render={()=><Resume/>}/>
      <Route path="/" render={()=><Home/>}/>
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
