import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Packages from "./components/packages";
import Gallery from "./components/gallery";
import ContactConnector from "./components/contaccontactor";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Favicon from "./Icon.svg";

export class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Navigation />
        <Header />
        <Packages />
        <Gallery />
        <ContactConnector />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
