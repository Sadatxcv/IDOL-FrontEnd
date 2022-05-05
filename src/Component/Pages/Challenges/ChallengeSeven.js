import React from "react";
import { Container } from "react-bootstrap";
import "./Challenge.css";

const ChallengeSeven = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
          Challenge 7:
          <br />
          <br />
          Final Challenge to recieve a certificate.
        </h1>
        <h3>
          Create a Mindmap regarding the topic ________  and mail it to _______ to recieve a certificate at your registered Email address.
        </h3>
        <br />
        <br />

        <h3 className="text-center">Thank you & Goodluck!</h3>
        <br />

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="/">
              <span class="button-text-Challenge">Exit</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeSeven;
