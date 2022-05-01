import React from "react";
import { Container } from "react-bootstrap";
import "./Survey.css";

const Survey = () => {
  return (
    <div>
      <Container className="Survey-Container">
        <h1>Do you have any questions regarding how to focus your mind?</h1>
        <center>
        <img src="static/survey.jpg" alt="survey_img" />
        </center>

        <br />

        <div className="home-button-Survey">
          <button class="get-started-Survey">
            <span class="circle-Survey">
              <span class="icon-Survey arrow-Survey"></span>
            </span>
            <a href="#">
              <span class="button-text-Survey">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Survey;
