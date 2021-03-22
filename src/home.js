import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple Single Page website</h1> <br/>
          {/* <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> */}
          <div className="content">
            <h2> I am a web developer I’m a front-end developer who loves building user-friendly websites and web apps, enjoys writing documentation and loves helping people learn how to code. I also really like drawing with CSS.</h2> <br/>
            <h2>I’m currently interested in learning more about accessibility and delving deeper into CSS/JS animations</h2>
          </div>
          
        </div>
    );
  }
}
 
export default Main;