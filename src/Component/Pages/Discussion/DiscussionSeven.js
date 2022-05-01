import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DiscussionSeven.css";

const DiscussionSeven = () => {
  return (
    <div>
      <Container className="DiscussionSeven-Container">
        <h1>Can you share any of the questions from one branch?</h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="DiscussionSeven-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pLL7bk3W3Xk?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <h3 className="text-center">
          Now click "Next" to complete the workshop.
        </h3>

        <br />

        <div className="home-button-DiscussionSeven">
          <button class="get-started-DiscussionSeven">
            <span class="circle-DiscussionSeven">
              <span class="icon-DiscussionSeven arrow-DiscussionSeven"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-DiscussionSeven">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionSeven;
