import React from "react";
import { Container } from "react-bootstrap";
import "./Challenge.css";

const ChallengeTwo = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
          Challenge 2:
          <br />
          <br />
          As adults, if you are curious about something what kind of questions
          can you ask? Can you think about it and give examples?
        </h1>
        <h3>
          "As adults, if you are curious about something what kind of questions
          can you ask? Can you think about it and give examples?"
          <br />
          <br />
          Watch the video and respond to the question below.
        </h3>
        <div className="Challenge-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nsq9lWRdXmc?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        
        <center>
          <img src="static/Challenge-2_Image-1.jpg" alt="challange_img" />
        </center>

        <br />

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="/discussion-2">
              <span class="button-text-Challenge">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeTwo;
