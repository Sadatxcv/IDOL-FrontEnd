import React from "react";
import { Container } from "react-bootstrap";
import "./ChallengeTwo.css";

const ChallengeTwo = () => {
  return (
    <div>
      <Container className="ChallengeTwo-Container">
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
        <div className="ChallengeTwo-Video-Container">
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
        <h3>
          Go through the options given below and select the ones that you feel
          to be correct
        </h3>
        <br />
        <center>
          <img src="static/Challenge-2_Image-1.jpg" alt="challange_img" />
        </center>

        <h3>Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-ChallengeTwo">
          <button class="get-started-ChallengeTwo">
            <span class="circle-ChallengeTwo">
              <span class="icon-ChallengeTwo arrow-ChallengeTwo"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-ChallengeTwo">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeTwo;
