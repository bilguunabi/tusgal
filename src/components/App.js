import React, { Component } from "react";
import Navigation from "./navigation";
import Header from "./header";
import Packages from "./packages";
import About from "./about";
import Gallery from "./gallery";
import Contact from "./contact";

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Packages data={this.state.resumeData.Features} />
        <About data={this.state.resumeData.About} />
        <Gallery />
        <Contact data={this.state.resumeData.Contact} />
      </div>
    );
  }
}

export default App;
