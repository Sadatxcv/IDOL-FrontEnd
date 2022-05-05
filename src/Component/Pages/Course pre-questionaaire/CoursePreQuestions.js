import React from "react";
import { Container } from "react-bootstrap";
import User_form from "../../Test/User_form";
import "./CoursePreQuestions.css";

const CoursePreQuestions = () => {
  return (
    <div>
      <Container className="CoursePreQuestions-Container">
        <h1>Course pre-questionnaire</h1>
        <h3>
          This form is for the participants who wish to develop their "thinking
          skills" to better manage the challenges of study and life. Please fill
          up this form to get started with the workshop.
        </h3>
        <br />
        <div className="CoursePreQuestions-Form-Container">
          <center>
            <User_form id="10" />
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
            <a href="/themanticAnalysis-1">
              <span class="button-text-CoursePreQuestions">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CoursePreQuestions;
