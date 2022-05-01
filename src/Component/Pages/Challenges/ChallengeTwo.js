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
        
        <center>
          <img src="static/Challenge-2_Image-1.jpg" alt="challange_img" />
        </center>

        <br />

        <div className="home-button-ChallengeTwo">
          <button class="get-started-ChallengeTwo">
            <span class="circle-ChallengeTwo">
              <span class="icon-ChallengeTwo arrow-ChallengeTwo"></span>
            </span>
            <a href="/discussion-2">
              <span class="button-text-ChallengeTwo">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeTwo;
