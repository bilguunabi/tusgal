import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import Video from "../images/reel.mp4";

function Gallery() {
  const [selectedImgURL, setSelectedImgURL] = useState(null);
  const [modalVisible, setModalVisible] = useState(null);
  const imgList = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-1.jpg",
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-2.jpg",
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-3.jpg",
    },
    {
      id: 4,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-4.jpg",
    },
    {
      id: 5,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-5.jpg",
    },
    {
      id: 6,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-6.jpg",
    },
    {
      id: 7,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-7.jpg",
    },
    {
      id: 8,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-8.jpg",
    },
    {
      id: 9,
      url: process.env.PUBLIC_URL + "/img/gallery/gallery-image-9.jpg",
    },
  ];
  return (
    <div id="gallery" className="text-center">
      {/* <video width="100%" height="auto" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <Row gutter={24}>
              {imgList.map((el) => {
                return (
                  <Col span={8} key={el.id} className="mb-4">
                    <div
                      className="gallery-img-link"
                      onClick={() => {
                        setSelectedImgURL(el.url);
                        setModalVisible(true);
                      }}
                    >
                      <img src={el.url} className="img-responsive" alt="wedding-photo" style={{ width: "100%" }} />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <Modal
        className="gallery-view"
        centered
        closeIcon={null}
        visible={modalVisible}
        footer={false}
        onCancel={() => {
          setModalVisible(false);
        }}
      >
        <div>
          <img src={selectedImgURL} className="img-responsive" alt="wedding-photo" style={{ width: "100%" }} />
        </div>
      </Modal>
    </div>
  );
}

export default Gallery;
