import React, { Component } from "react";
import { Row, Col } from "antd";
import AboutUsIMG from "../images/about.jpg";

export class ContactContactor extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ margin: "50px auto" }}>
          <Row>
            <Col lg={{ span: 20, offset: 2 }}>
              <div className="d-flex">
                <h1>
                  <div className="font-playfair">
                    Let's Work Together & <br />
                    Make a Game Changing Content
                  </div>
                </h1>
                <div
                  style={{
                    borderRadius: 50,
                    border: "1px solid black",
                    borderRadius: "50%",
                    border: "1px solid black",
                    width: 140,
                    height: 140,
                  }}
                >
                  Contact Us
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ContactContactor;
