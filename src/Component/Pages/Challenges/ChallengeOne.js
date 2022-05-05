import React from "react";
import { Container } from "react-bootstrap";
import User_form from "../../Test/User_form";
import "./Challenge.css";

const ChallengeOne = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
          Challenge 1:
          <br />
          <br />
          Can questions help focus learning?
        </h1>
        <h3>
          "As a child were you curious? Did you ask questions? In your opinion,
          why did you ask questions?" Watch the video and respond to the
          question below.
        </h3>
        <div className="Challenge-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FKF7wl5Qc2Q?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <h3>
          Go through the options given below and select the ones that you feel
          to be correct
        </h3>
        <br />
        <center>
          <User_form id="10" />
        </center>

        <h3 className="text-center">
          Now click "Next" to answer the following question.
        </h3>

        <br />

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="/discussion-1">
              <span class="button-text-Challenge">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeOne;
