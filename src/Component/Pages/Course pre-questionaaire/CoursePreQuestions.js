import React from "react";
import { Container } from "react-bootstrap";
import "./CoursePreQuestions.css";

const CoursePreQuestions = () => {
  return (
    <div>
      <Container className="CoursePreQuestions-Container">
        <h1>Course pre-questionnaire</h1>
        <h3>
        This form is for the participants who wish to develop their "thinking skills" to better manage the challenges of study and life. Please fill up this form to get started with the workshop.
        </h3>
        <br/>
        <div className="CoursePreQuestions-Form-Container">
          <center>
            <img src="static/CoursePre-Questionnaire1_Image-1.png" alt="CoursePreQuestions_img" />
            <img src="static/CoursePre-Questionnaire1_Image-2.png" alt="CoursePreQuestions_img" />
            <img src="static/CoursePre-Questionnaire1_Image-3.png" alt="CoursePreQuestions_img" />
          </center>
        </div>
        <br />

        <h3 className="text-center">Now click "Next" to watch other participants' responses and compare them with your own.</h3>
      
        <div className="home-button-CoursePreQuestions">
          <button class="get-started-CoursePreQuestions">
            <span class="circle-CoursePreQuestions">
              <span class="icon-CoursePreQuestions arrow-CoursePreQuestions"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-CoursePreQuestions">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CoursePreQuestions;
