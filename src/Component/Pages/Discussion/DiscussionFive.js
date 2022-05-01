import React from "react";
import { Container } from "react-bootstrap";
import "./Discussion.css";

const DiscussionFive = () => {
  return (
    <div>
      <Container className="Discussion-Container">
        <h1>Can you share any of the questions from one branch?</h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="Discussion-Video-Container">
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

        <div className="home-button-Discussion">
          <button class="get-started-Discussion">
            <span class="circle-Discussion">
              <span class="icon-Discussion arrow-Discussion"></span>
            </span>
            <a href="/challenge-6">
              <span class="button-text-Discussion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionFive;
