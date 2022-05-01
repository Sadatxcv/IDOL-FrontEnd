import React from "react";
import { Container } from "react-bootstrap";
import "./ChallengeSeven.css";

const ChallengeSeven = () => {
  return (
    <div>
      <Container className="ChallengeSeven-Container">
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

        <div className="home-button-ChallengeSeven">
          <button class="get-started-ChallengeSeven">
            <span class="circle-ChallengeSeven">
              <span class="icon-ChallengeSeven arrow-ChallengeSeven"></span>
            </span>
            <a href="/">
              <span class="button-text-ChallengeSeven">Exit</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeSeven;
