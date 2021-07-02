import React, { Component } from "react";
import { Row, Col } from "antd";
import AboutUsIMG from "../images/about.jpg";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ margin: "50px auto" }}>
          <Row>
            <Col lg={{ span: 20, offset: 2 }}>
              <Row gutter={48}>
                <Col span={10}>
                  <div style={{ overflow: "hidden", borderRadius: "0 85px" }}>
                    <img src={AboutUsIMG} alt="aboutus" style={{ width: "100%" }} />
                  </div>
                </Col>
                <Col span={14} style={{ display: "flex" }}>
                  <div
                    style={{
                      margin: "auto",
                    }}
                  >
                    <h2 className="font-playfair">About us</h2>
                    <div>
                      What started off as a fun pastime hobby 6 years ago for us has become our biggest passion over the
                      years. We began by doing our friends’ weddings in order to gain experience and the pleasure of
                      providing awesome content. Over the years, that pastime developed into our core for excellence. We
                      have the most up to date technology that will help us capture every moment of an amazing day. The
                      biggest satisfaction of all this is receiving the genuine reaction of our clients after seeing the
                      outcome of our work. We strive to make every part of the day something that is unforgettable.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
