import React, { Component } from "react";
import BackgroundImage from "../Background_00000.jpg";
import BackgroundGif from "../Final.gif";
import { Parallax } from "react-parallax";
import { Button } from "antd";

export class Header extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return (
      <div id="header">
        <div style={{ zIndex: -1 }}>
          <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={BackgroundImage}
            bgImageAlt="background"
            bgImageSize={400}
            strength={500}
          >
            <img src={BackgroundGif} style={{ width: "100%" }} />
          </Parallax>
          <div
            className="position-absolute"
            style={{
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 90,
              width: "70%",
              textAlign: "center",
            }}
          >
            <span className="font-shadow" style={{ lineHeight: "95px" }}>
              Life's most beautiful moments are meant to be remembered
            </span>
            <div style={{ marginTop: "2.5rem" }}>
              <Button
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
                type="primary"
                style={{
                  borderRadius: 40,
                  fontSize: 20,
                  padding: "11px 40px",
                  height: "55px",
                }}
              >
                Let's Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
