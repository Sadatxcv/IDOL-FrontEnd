import React from "react";
import { Container } from "react-bootstrap";
import User_form from "../../Test/User_form";
import "./CoursePreQuestions.css";

const CoursePreQuestions2 = () => {
  return (
    <div>
      <Container className="CoursePreQuestions-Container">
        <h1>Course pre-questionnaire (continue)</h1>
        <h3>Please answer the following question.</h3>
        <br />
        <div className="CoursePreQuestions-Form-Container">
          <center>
            <User_form id="9" />
          </center>
        </div>
        <br />

        <h3 className="text-center">
          Now click "Next" to watch other participants' responses and compare
          them with your own.
        </h3>

        <div className="home-button-CoursePreQuestions">
          <button class="get-started-CoursePreQuestions">
            <span class="circle-CoursePreQuestions">
              <span class="icon-CoursePreQuestions arrow-CoursePreQuestions"></span>
            </span>
            <a href="/themanticAnalysis-2">
              <span class="button-text-CoursePreQuestions">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CoursePreQuestions2;
