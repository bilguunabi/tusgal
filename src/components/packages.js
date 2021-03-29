import React, { Component } from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
            <Col span={24}>
              <table border="1">
                <thead>
                  <tr>
                    <td>Our Packages</td>
                    <td>Basic $559</td>
                    <td>Standard $559</td>
                    <td>Premium $559</td>
                    <td>Diamond $559</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Videographer</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Wireless Mics</td>
                    <td>
                      <FontAwesomeIcon icon={faCaretDown} size="xs" />
                    </td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>No Edit - Raw Footage Hard Drive</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Digital Download</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default packages;
