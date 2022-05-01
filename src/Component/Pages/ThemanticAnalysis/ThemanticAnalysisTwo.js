import React from "react";
import { Container } from "react-bootstrap";
import "./ThemanticAnalysisTwo.css";

const ThemanticAnalysisTwo = () => {
  return (
    <div>
      <Container className="ThemanticAnalysisTwo-Container">
        <h1>Thematic analysis</h1>
        <h3>
          Please watch the video given below and compare your response with the
          other participants.
        </h3>
        <div className="ThemanticAnalysisTwo-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZQqYkdM4zxw?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img
            src="static/ThemanticAnalysis-2_image_2.jpg"
            alt="thematic_img"
          />
        </center>

        <h3 className="text-center">Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-ThemanticAnalysisTwo">
          <button class="get-started-ThemanticAnalysisTwo">
            <span class="circle-ThemanticAnalysisTwo">
              <span class="icon-ThemanticAnalysisTwo arrow-ThemanticAnalysisTwo"></span>
            </span>
            <a href="/challengeOne">
              <span class="button-text-ThemanticAnalysisTwo">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ThemanticAnalysisTwo;
