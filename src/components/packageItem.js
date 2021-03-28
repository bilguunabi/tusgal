import React, { Component } from "react";
import { Row, Col, Button, Modal } from "antd";

export class packageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.handleModalCancel = this.handleModalCancel.bind(this);
  }

  componentDidMount() {}

  handleModalCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <Col className="package-item-box">
        <div
          style={
            this.props.package.isPopular ? popularBoxStyle : notPopularBoxStyle
          }
        >
          {this.props.package.isPopular ? "MOST POPULAR" : ""}
        </div>
        <div style={packageItemStyle}>
          <Row>
            <Col
              span={24}
              style={{
                color: "#263b80",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {this.props.package.title}
            </Col>
            <Col span={24} style={{ fontSize: 42, marginBottom: 12 }}>
              {this.props.package.price}
            </Col>
            <Col
              span={24}
              style={{ marginBottom: 12, color: "#263b80", fontWeight: 700 }}
            >
              {this.props.package.hours} hours
            </Col>
            <Col span={24} style={{ marginBottom: 20 }}>
              {this.props.package.features.map((el) => {
                return <div>{el}</div>;
              })}
            </Col>
            <Col span={24}>
              <Button
                className="btn-t-primary"
                onClick={() => {
                  this.setState({ isModalVisible: true });
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>
          <div></div>
        </div>
        <Modal
          title="Package details"
          visible={isModalVisible}
          destroyOnClose={true}
          //   onOk={handleOk}
          onCancel={this.handleModalCancel}
        ></Modal>
      </Col>
    );
  }
}

export default packageItem;

const packageItemStyle = {
  background: "white",
  width: 300,
  boxShadow: "0px 0px 25px 0px rgb(0 0 0 / 8%)",
  padding: 30,
};
const popularBoxStyle = {
  background: "#1f93a4",
  color: "white",
  boxShadow: "0px 0px 25px 0px rgb(0 0 0 / 8%)",
  width: 300,
  height: 35,
  padding: 6,
};
const notPopularBoxStyle = {
  height: 35,
};
