import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DiscussionSix.css";

const DiscussionSix = () => {
  return (
    <div>
      <Container className="DiscussionSix-Container">
        <h1>Can you share any of the questions from one branch?</h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="DiscussionSix-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MtmvVFuS_Zo?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center><img src="static/Discussion-6_image-1.jpg" alt="discussion_img" /></center>
        <h3 className="text-center">
          Now click "Next" to answer the following question.
        </h3>

        <br />

        <div className="home-button-DiscussionSix">
          <button class="get-started-DiscussionSix">
            <span class="circle-DiscussionSix">
              <span class="icon-DiscussionSix arrow-DiscussionSix"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-DiscussionSix">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionSix;
