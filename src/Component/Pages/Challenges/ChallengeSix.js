import React from "react";
import { Container } from "react-bootstrap";
import "./Challenge.css";

const ChallengeSix = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
          Challenge 6:
          <br />
          <br />
          In your opinion, in what areas of your life can this brain focusing technique be used?
        </h1>
        <h3>
        In your opinion, in what areas of your life can this brain focusing technique be used?
          <br />
          <br />
          Watch the video and respond to the question below.
        </h3>
        <div className="Challenge-Video-Container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1FNVlzhCJo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br />

        <br />
        <center>
          <img src="static/Challenge-6_Image-1.png" alt="challange_img" />
        </center>

        <br />

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="/discussion-6">
              <span class="button-text-Challenge">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeSix;
