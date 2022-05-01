import React from "react";
import { Container } from "react-bootstrap";
import "./ThemanticAnalysisOne.css";

const ThemanticAnalysisOne = () => {
  return (
    <div>
      <Container className="ThemanticAnalysisOne-Container">
        <h1>Thematic analysis</h1>
        <h3>
          Thank you for filling up the course pre-questionnaire. You can now
          watch the video given below and compare your response with the other
          participants.
        </h3>
        <div className="ThemanticAnalysisOne-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rtkCqcEqSEI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/ThemanticAnalysis-1_image_1.jpg" alt="thematic_img" />
        </center>

        <h3>
          Watch the video on the thematic analysis of the question "In your
          opinion, is asking questions important? If yes, why? Please give an
          example of a question that you would like to know more about?"
        </h3>
        <div className="ThemanticAnalysisOne-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pkxs5quslFU?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/ThemanticAnalysis-1_image_2.jpg" alt="thematic_img" />
        </center>

        <div className="home-button-ThemanticAnalysisOne">
          <button class="get-started-ThemanticAnalysisOne">
            <span class="circle-ThemanticAnalysisOne">
              <span class="icon-ThemanticAnalysisOne arrow-ThemanticAnalysisOne"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-ThemanticAnalysisOne">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ThemanticAnalysisOne;
