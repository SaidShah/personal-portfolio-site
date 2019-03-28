import React, { Component } from 'react';
import logo from '../images/sbs-tech-logo.png'

class Navbar extends Component {

  state = {
 navCollapsed: true
}

_onToggleNav = () => {
 this.setState({ navCollapsed: !this.state.navCollapsed })
}

  render() {
    const {navCollapsed} = this.state
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
    <img src={logo} alt="logo" className="logo"/>
  <button
        className="navbar-toggler collapsed"
        type="button"
        onClick={this._onToggleNav}
        style={{zIndex:"1000"}}
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div
      className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
      >
    <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link black-text navbar-font" href="/">Home</a>
    </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#recent">Recent Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/resume">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://medium.com/@saidmysr20" target="_blank" rel="noopener noreferrer">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://github.com/saidshah" target="_blank" rel="noopener noreferrer">Github</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://www.linkedin.com/in/said-shah-12869b120/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }

}

export default Navbar;
