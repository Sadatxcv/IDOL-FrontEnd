import React from "react";
import { Container } from "react-bootstrap";
import "./ChallengeOne.css";

const ChallengeOne = () => {
  return (
    <div>
      <Container className="ChallengeOne-Container">
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
        <div className="ChallengeOne-Video-Container">
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
        <h3>Go through the options given below and select the ones that you feel to be correct</h3>
        <br />
        <center>
          <img
            src="static/Challenge-1_Image-1.jpg"
            alt="challange_img"
          />
        </center>

        <h3>Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-ChallengeOne">
          <button class="get-started-ChallengeOne">
            <span class="circle-ChallengeOne">
              <span class="icon-ChallengeOne arrow-ChallengeOne"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-ChallengeOne">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeOne;
