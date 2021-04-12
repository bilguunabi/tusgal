import React, { Component } from "react";
import { Collapse, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo.png";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export class packages extends Component {
  render() {
    const services = [
      {
        service: "Videographer",
        isCheck: false,
        basic: 1,
        standard: 2,
        premium: 2,
        diamond: 2,
      },
      {
        service: "Wireless Mics",
        isCheck: true,
        basic: true,
        standard: true,
        premium: true,
        diamond: true,
      },
      {
        service: "No Edit - Raw Footage Hard Drive",
        isCheck: true,
        basic: true,
        standard: true,
        premium: true,
        diamond: true,
      },
      {
        service: "Digital Download",
        isCheck: true,
        basic: true,
        standard: true,
        premium: true,
        diamond: true,
      },
      {
        service: "Hours of Video Coverage",
        isCheck: false,
        basic: "4 hours",
        standard: "6 hours",
        premium: "8 hours",
        diamond: "10 hours",
      },
      {
        service: "Video Lights",
        isCheck: true,
        basic: false,
        standard: true,
        premium: true,
        diamond: true,
      },
      {
        service: "Drone Footage",
        isCheck: true,
        basic: false,
        standard: false,
        premium: true,
        diamond: true,
      },
      {
        service: "60 - 90 min Full Video Edit",
        isCheck: true,
        basic: false,
        standard: false,
        premium: true,
        diamond: true,
      },
      {
        service: "3 - 5 min Cinematic Highlight Video",
        isCheck: true,
        basic: false,
        standard: false,
        premium: false,
        diamond: true,
      },
      {
        service: "4K Video",
        isCheck: true,
        basic: false,
        standard: false,
        premium: false,
        diamond: true,
      },
      {
        service: "Cloud Storage (1 year)",
        isCheck: true,
        basic: false,
        standard: false,
        premium: false,
        diamond: true,
      },
    ];
    return (
      <div id="packages" className="text-center">
        <div className="container">
          <div className="packages-section-title">
            Tusgal Videography's Wedding Packages
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table className="package-table">
              <thead>
                <tr>
                  <td style={{ background: "#ededed" }}>
                    <img src={Logo} alt="tusgal" style={{ width: 200 }} />
                  </td>
                  <td>
                    <div className="package-header">
                      <div className="package-title">Basic</div>
                      <div className="package-price">$559</div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="package-header"
                      style={{ background: "#2b43bf" }}
                    >
                      <div
                        className="package-title"
                        style={{ background: "#2b43bf" }}
                      >
                        Standard
                      </div>
                      <div className="package-price">$999</div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="package-header"
                      style={{ background: "#263aaa" }}
                    >
                      <div className="package-title">Premium</div>
                      <div className="package-price">$1699</div>
                      <div className="package-best">Best</div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="package-header"
                      style={{ background: "#1e3499" }}
                    >
                      <div className="package-title">Diamond</div>
                      <div className="package-price">$2499</div>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {services.map((el) => {
                  if (el.isCheck) {
                    return (
                      <tr key={el.service}>
                        <td className="cell-service">{el.service}</td>
                        <td>
                          {el.basic ? (
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              size="s"
                              color="#31c044"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size="s"
                              color="#dc343d"
                            />
                          )}
                        </td>
                        <td>
                          {el.standard ? (
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              size="s"
                              color="#31c044"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size="s"
                              color="#dc343d"
                            />
                          )}
                        </td>
                        <td>
                          {el.premium ? (
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              size="s"
                              color="#31c044"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size="s"
                              color="#dc343d"
                            />
                          )}
                        </td>
                        <td>
                          {el.diamond ? (
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              size="s"
                              color="#31c044"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              size="s"
                              color="#dc343d"
                            />
                          )}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={el.service}>
                        <td className="cell-service">{el.service}</td>
                        <td>{el.basic}</td>
                        <td>{el.standard}</td>
                        <td>{el.premium}</td>
                        <td>{el.diamond}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <tfoot>
                <tr key="learn">
                  <td className="select-plan-blank-td"></td>
                  <td class="select-plan-td">
                    <Button>Select Plan</Button>
                  </td>
                  <td class="select-plan-td">
                    <Button>Select Plan</Button>
                  </td>
                  <td class="select-plan-td">
                    <Button>Select Plan</Button>
                  </td>
                  <td class="select-plan-td">
                    <Button>Select Plan</Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div style={{ userSelect: "none" }}>
            <Collapse
              className="additional-collapse"
              defaultActiveKey={["0"]}
              ghost
              expandIcon={({ isActive }) => {
                if (isActive) return <MinusOutlined style={{ fontSize: 18 }} />;
                else return <PlusOutlined style={{ fontSize: 18 }} />;
              }}
            >
              <Panel
                header={
                  <div
                    style={{
                      fontSize: 20,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Additional Services
                  </div>
                }
                key="1"
              >
                <table className="additional-table">
                  <tbody>
                    <tr>
                      <td>Drone Footage</td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>3 - 5 min Highlight video</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>Video Lights</td>
                      <td>$200</td>
                    </tr>
                    <tr>
                      <td>60 - 90 min Full Video</td>
                      <td>$400</td>
                    </tr>
                    <tr>
                      <td>Physical Discs DSVD</td>
                      <td>$40</td>
                    </tr>
                    <tr>
                      <td>Additional Camera</td>
                      <td>$200</td>
                    </tr>
                    <tr>
                      <td>Photography Service</td>
                      <td>$1000</td>
                    </tr>
                  </tbody>
                </table>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default packages;
