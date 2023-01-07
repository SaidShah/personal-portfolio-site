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
        <a className="nav-link navbar-font black-text" href="/#about" onClick={this._onToggleNav}>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#experience" onClick={this._onToggleNav}>Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#recent" onClick={this._onToggleNav}>Personal Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/#contact" onClick={this._onToggleNav}>Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/resume" onClick={this._onToggleNav}>Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://medium.com/@saidmysr20" target="_blank" rel="noopener noreferrer" onClick={this._onToggleNav}>Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://github.com/saidshah" target="_blank" rel="noopener noreferrer" onClick={this._onToggleNav}>Github</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="https://www.linkedin.com/in/said-shah-12869b120/" target="_blank" rel="noopener noreferrer" onClick={this._onToggleNav}>LinkedIn</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link navbar-font black-text" href="/nft" rel="noopener noreferrer">NFT</a>
      </li> */}
    </ul>
  </div>
</nav>
    );
  }

}

export default Navbar;
