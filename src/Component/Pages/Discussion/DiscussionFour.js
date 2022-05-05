import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Discussion.css";

const DiscussionFour = () => {
  return (
    <div>
      <Container className="Discussion-Container">
        <h1>
        Can you share your mindmap with others
        </h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="Discussion-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HrVBmWLbw-A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <Row>
          <Col sm={6}><img src="static/Discussion-5_image-1.jpg" alt="discussion_img" /></Col>
          <Col sm={6}><img src="static/Discussion-5_image-2.jpg" alt="discussion_img" /></Col>
        </Row>
        <h3 className="text-center">Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-Discussion">
          <button class="get-started-Discussion">
            <span class="circle-Discussion">
              <span class="icon-Discussion arrow-Discussion"></span>
            </span>
            <a href="/challenge-5">
              <span class="button-text-Discussion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionFour;
