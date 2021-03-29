import React, { Component } from "react";
import { Button } from "antd";
import Logo from "../logo.png";

export class Navigation extends Component {
  render() {
    return (
      <div className="position-absolute w-100" style={{ zIndex: 1 }}>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ marginTop: 60 }}
        >
          <div className="container-fluid justify-content-center">
            <button
              className="navbar-toggler position-absolute"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ left: 20 }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0 me-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#packages">
                    Packages
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar-brand me-0" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <div className="d-flex ms-4">
              <div className="ms-4">
                <span>Call Us:</span>
                <span>
                  <a type="link" href="tel:+773 490 6262" className="ms-2">
                    +773 490 6262
                  </a>
                </span>
              </div>
              <Button className="t-btn ms-4">Contact Us</Button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
