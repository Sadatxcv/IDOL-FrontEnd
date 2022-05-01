import React from "react";
import { Container } from "react-bootstrap";
import "./Challenge.css";

const ChallengeFive = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
          Challenge 5:
          <br />
          <br />
          Can you share any of the questions from one branch?
        </h1>
        <h3>
          "Can you share any of the questions from one branch?"
          <br />
          <br />
          Watch the video and respond to the question below.
        </h3>
        <div className="Challenge-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yuA8-xe2MqA?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />

        <br />
        <center>
          <img src="static/Challenge-5_Image-1.jpg" alt="challange_img" />
        </center>

        <br />

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="/discussion-5">
              <span class="button-text-Challenge">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeFive;
