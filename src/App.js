import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Packages from "./components/packages";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Packages />
        <About />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
