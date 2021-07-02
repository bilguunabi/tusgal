import React, { Component } from "react";
import { Row, Col } from "antd";
import AboutUsIMG from "../images/about.jpg";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 100 }}>
          <Row>
            <Col span={8}>
              <h3>Our contact</h3>
              <div>
                <p>
                  <span>Address:</span>
                  <b>4710 Arbor Drive, Rolling Meadows</b>
                </p>
                <p>
                  <span>Telephone:</span>
                  <b>(773) 490-6062</b>
                </p>
                <p>
                  <span>Email:</span>
                  <b>info@tusgalvideography.com</b>
                </p>
              </div>
            </Col>
            <Col span={8}>About Us</Col>
            <Col span={8}>Subscribe</Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
