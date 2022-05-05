import React from "react";
import { Container } from "react-bootstrap";
import "./Challenge.css";

const ChallengeFour = () => {
  return (
    <div>
      <Container className="Challenge-Container">
        <h1>
        Challenge 4:
        <br /> 
        For your chosen topic use the diagram above to add specific questions in each branch.
        </h1>
        <h3>"For your chosen topic use the diagram above to add specific questions in each branch."</h3>
        
        <h3>Watch the video and upload your question-mindmap below.</h3>
        <div className="Challenge-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HrVBmWLbw-A?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h3 className="text-center">Draw your own Mind Map Below</h3>
        <center>
          <div className="Challenge-Inputs">
              
          </div>
        </center>

        <div className="home-button-Challenge">
          <button class="get-started-Challenge">
            <span class="circle-Challenge">
              <span class="icon-Challenge arrow-Challenge"></span>
            </span>
            <a href="discussion-4"><span class="button-text-Challenge">Next</span></a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeFour;
