import React from "react";
import { Container } from "react-bootstrap";
import "./ChallengeThree.css";

const ChallengeThree = () => {
  return (
    <div>
      <Container className="ChallengeThree-Container">
        <h1>
          Challenge 3:
          <br />
          <br />
          Can you come up with a specific topic that you would like to know more
          about?
        </h1>
        <h3>
          "Can you come up with a specific topic that you would like to know
          more about?"
          <br />
          <br />
          Watch the video and respond to the question below.
        </h3>
        <div className="ChallengeThree-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_BD77PBRpIY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        
        <br />
        <center>
          <img src="static/Challenge-3_Image-1.jpg" alt="challange_img" />
        </center>

        <br />

        <div className="home-button-ChallengeThree">
          <button class="get-started-ChallengeThree">
            <span class="circle-ChallengeThree">
              <span class="icon-ChallengeThree arrow-ChallengeThree"></span>
            </span>
            <a href="/discussion-4">
              <span class="button-text-ChallengeThree">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeThree;
