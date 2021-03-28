import React, { Component } from "react";
import { Row, Col } from "antd";
import PackageItem from "./packageItem";

export class packages extends Component {
  render() {
    const packages = [
      {
        id: 1,
        title: "Basic",
        price: "$595",
        hours: "4",
        features: ["1 Videographer", "Wireless Mic", "No edit - Raw footage"],
        isPopular: false,
      },
      {
        id: 2,
        title: "Standard",
        price: "$995",
        hours: "6",
        features: ["2 Videographer", "Wireless Mic", "No edit - Raw footage"],
        isPopular: true,
      },
      {
        id: 3,
        title: "Premium",
        price: "$1995",
        hours: "10",
        features: [
          "2 Videographer",
          "Wireless Mic",
          "Video Lights",
          "Raw Footage with portable hard drive",
          "60-90 min full video edit",
          "3-5 min hightlight video",
        ],
        isPopular: false,
      },
    ];
    return (
      <div id="packages" className="text-center">
        <div className="container">
          <Row>
            <Col span={20} offset={2}>
              <div className="section-title">
                <h2>Packages</h2>
              </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            {packages.map((el) => {
              return <PackageItem package={el} />;
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default packages;
