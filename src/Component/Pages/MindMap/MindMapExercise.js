import React from "react";
import "./MindMapExercise.css";
import { Container } from "react-bootstrap";

const MindMapExercise = () => {
  return (
    <div>
      <Container className="MindMapExercise-Container">
        <h1>
        Challenge 4:
        <br /> 
        For your chosen topic use the diagram above to add specific questions in each branch.
        </h1>
        <h3>"For your chosen topic use the diagram above to add specific questions in each branch."</h3>
        
        <h3>Watch the video and upload your question-mindmap below.</h3>
        <div className="MindMapExercise-Video-Container">
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
          <div className="MindMapExercise-Inputs">
              
          </div>
        </center>

        <div className="home-button-MindMapExercise">
          <button class="get-started-MindMapExercise">
            <span class="circle-MindMapExercise">
              <span class="icon-MindMapExercise arrow-MindMapExercise"></span>
            </span>
            <span class="button-text-MindMapExercise">Next</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MindMapExercise;
