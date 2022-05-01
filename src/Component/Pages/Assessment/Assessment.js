import React from "react";
import { Container } from "react-bootstrap";
import "./Assessment.css";

const Assessment = () => {
  return (
    <div>
      <Container className="Assessment-Container">
        <h1>Do you have any questions regarding how to focus your mind?</h1>
        <center>
        <img src="static/survey.png" alt="survey_img" />
        </center>

        <br />

        <div className="home-button-Assessment">
          <button class="get-started-Assessment">
            <span class="circle-Assessment">
              <span class="icon-Assessment arrow-Assessment"></span>
            </span>
            <a href="/challenge-7">
              <span class="button-text-Assessment">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Assessment;
