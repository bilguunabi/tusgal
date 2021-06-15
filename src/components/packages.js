import React, { useState } from "react";
import { Collapse, Button, Modal, Row, Col, Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo.png";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const packages = [
  {
    id: 1,
    name: "Basic",
    price: 559,
    videographer: 1,
    wirelessMic: true,
    rawFootage: true,
    digitalDownload: true,
    hours: 4,
    videoLights: false,
    droneFootage: false,
    videoEdit: false,
    highlightVideo: false,
    fourK: false,
    cloud: false,
    additionalServices: [
      {
        name: "Video Lights",
        price: 200,
      },
      {
        name: "Drone Footage",
        price: 250,
      },
      {
        name: "60 - 90 min Full Video Edit",
        price: 400,
      },
      {
        name: "3 - 5 min Cinematic Highlight Video",
        price: 300,
      },
      {
        name: "Physical discs DVD",
        price: 40,
      },
      {
        name: "Additional Camera",
        price: 200,
      },
      {
        name: "Photography Service",
        price: 1000,
      },
      {
        name: "Live Streaming",
        price: 800,
      },
      {
        name: "4K Video",
        price: 10,
      },
      {
        name: "Cloud Storage (1 year)",
        price: 100,
      },
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: 999,
    videographer: 2,
    wirelessMic: true,
    rawFootage: true,
    digitalDownload: true,
    hours: 6,
    videoLights: true,
    droneFootage: false,
    videoEdit: false,
    highlightVideo: false,
    fourK: false,
    cloud: false,
    additionalServices: [
      {
        name: "Drone Footage",
        price: 250,
      },
      {
        name: "60 - 90 min Full Video Edit",
        price: 400,
      },
      {
        name: "3 - 5 min Cinematic Highlight Video",
        price: 300,
      },
      {
        name: "Physical discs DVD",
        price: 40,
      },
      {
        name: "Additional Camera",
        price: 200,
      },
      {
        name: "Photography Service",
        price: 1000,
      },
      {
        name: "Live Streaming",
        price: 800,
      },
      {
        name: "4K Video",
        price: 10,
      },
      {
        name: "Cloud Storage (1 year)",
        price: 100,
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: 1699,
    videographer: 2,
    wirelessMic: true,
    rawFootage: true,
    digitalDownload: true,
    hours: 8,
    videoLights: true,
    droneFootage: true,
    videoEdit: true,
    highlightVideo: false,
    fourK: false,
    cloud: false,
    additionalServices: [
      {
        name: "3 - 5 min Cinematic Highlight Video",
        price: 300,
      },
      {
        name: "Physical discs DVD",
        price: 40,
      },
      {
        name: "Additional Camera",
        price: 200,
      },
      {
        name: "Photography Service",
        price: 1000,
      },
      {
        name: "Live Streaming",
        price: 800,
      },
      {
        name: "4K Video",
        price: 10,
      },
      {
        name: "Cloud Storage (1 year)",
        price: 100,
      },
    ],
  },
  {
    id: 4,
    name: "Diamond",
    price: 2499,
    videographer: 2,
    wirelessMic: true,
    rawFootage: true,
    digitalDownload: true,
    hours: 10,
    videoLights: true,
    droneFootage: true,
    videoEdit: true,
    highlightVideo: true,
    fourK: true,
    cloud: true,
    additionalServices: [
      {
        name: "Physical discs DVD",
        price: 40,
      },
      {
        name: "Additional Camera",
        price: 200,
      },
      {
        name: "Photography Service",
        price: 1000,
      },
      {
        name: "Live Streaming",
        price: 800,
      },
    ],
  },
];
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
function Packages() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div id="packages" className="text-center">
      <div className="container">
        <div className="packages-section-title">Tusgal Videography's Wedding Packages</div>
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
                  <div className="package-header" style={{ background: "#2b43bf" }}>
                    <div className="package-title" style={{ background: "#2b43bf" }}>
                      Standard
                    </div>
                    <div className="package-price">$999</div>
                  </div>
                </td>
                <td>
                  <div className="package-header" style={{ background: "#263aaa" }}>
                    <div className="package-title">Premium</div>
                    <div className="package-price">$1699</div>
                    <div className="package-best">Best</div>
                  </div>
                </td>
                <td>
                  <div className="package-header" style={{ background: "#1e3499" }}>
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
                          <FontAwesomeIcon icon={faCheckCircle} color="#31c044" />
                        ) : (
                          <FontAwesomeIcon icon={faTimesCircle} color="#dc343d" />
                        )}
                      </td>
                      <td>
                        {el.standard ? (
                          <FontAwesomeIcon icon={faCheckCircle} color="#31c044" />
                        ) : (
                          <FontAwesomeIcon icon={faTimesCircle} color="#dc343d" />
                        )}
                      </td>
                      <td>
                        {el.premium ? (
                          <FontAwesomeIcon icon={faCheckCircle} color="#31c044" />
                        ) : (
                          <FontAwesomeIcon icon={faTimesCircle} color="#dc343d" />
                        )}
                      </td>
                      <td>
                        {el.diamond ? (
                          <FontAwesomeIcon icon={faCheckCircle} color="#31c044" />
                        ) : (
                          <FontAwesomeIcon icon={faTimesCircle} color="#dc343d" />
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
                <td className="select-plan-td">
                  <Button
                    onClick={async () => {
                      setModalVisible(true);
                      await setSelectedPackage(packages.find((x) => x.id === 1));
                      setTotalPrice(599);
                    }}
                  >
                    Select Plan
                  </Button>
                </td>
                <td className="select-plan-td">
                  <Button
                    onClick={() => {
                      setModalVisible(true);
                      setSelectedPackage(packages.find((x) => x.id === 2));
                      setTotalPrice(999);
                    }}
                  >
                    Select Plan
                  </Button>
                </td>
                <td className="select-plan-td">
                  <Button
                    onClick={() => {
                      setModalVisible(true);
                      setSelectedPackage(packages.find((x) => x.id === 3));
                      setTotalPrice(1699);
                    }}
                  >
                    Select Plan
                  </Button>
                </td>
                <td className="select-plan-td">
                  <Button
                    onClick={() => {
                      setModalVisible(true);
                      setSelectedPackage(packages.find((x) => x.id === 4));
                      setTotalPrice(2499);
                    }}
                  >
                    Select Plan
                  </Button>
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
      <Modal
        title="&nbsp;"
        visible={modalVisible}
        centered
        destroyOnClose={true}
        width={1000}
        onOk={() => {}}
        onCancel={() => {
          setModalVisible(false);
        }}
        footer={false}
      >
        <Row gutter={24}>
          <Col span={12}>
            <h2>{selectedPackage?.name} Package</h2>
            <div>
              <Row gutter={24} className="serviceItem">
                <Col flex="auto">Videographer</Col>
                <Col flex="100px">{selectedPackage?.videographer}</Col>
              </Row>
              {selectedPackage?.wirelessMic ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>Wireless Mics</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.rawFootage ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>No Edit - Raw Footage Hard Drive</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.digitalDownload ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>Digital Download</Col>
                </Row>
              ) : (
                ""
              )}
              <Row gutter={24} className="serviceItem">
                <Col flex="auto">Hours of Video Coverage</Col>
                <Col flex="100px">{selectedPackage?.hours} hours</Col>
              </Row>
              {selectedPackage?.videoLights ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>Video Lights</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.droneFootage ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>Drone Footage</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.videoEdit ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>60 - 90 min Full Video Edit</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.highlightVideo ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>3 - 5 min Cinematic Highlight Video </Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.fourK ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>4K Video</Col>
                </Row>
              ) : (
                ""
              )}
              {selectedPackage?.cloud ? (
                <Row gutter={24} className="serviceItem">
                  <Col span={24}>Cloud Storage (1 year)</Col>
                </Row>
              ) : (
                ""
              )}
              <Row gutter={24} className="serviceItem">
                <Col flex="auto">Package Price</Col>
                <Col flex="100px">${selectedPackage?.price}</Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <h2>Additional Services</h2>
            {selectedPackage?.additionalServices.map((el) => {
              return (
                <div>
                  <Row gutter={24} className="serviceItem" key={el.id}>
                    <Col flex="auto">{el.name}</Col>
                    <Col flex="100px">${el.price}</Col>
                    <Col flex="80px">
                      <Switch
                        onChange={(e) => {
                          if (e) setTotalPrice(totalPrice + el.price);
                          else setTotalPrice(totalPrice - el.price);
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
            <div>
              <Row gutter={24} className="serviceItem">
                <Col flex="auto">
                  <b>TOTAL:</b>
                </Col>
                <Col flex="120px">{totalPrice}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default Packages;
