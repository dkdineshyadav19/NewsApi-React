import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand navbar-light bg-light p-1">
  <a className="navbar-brand" href="/">NewsApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
     
     
    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default Navbar;
