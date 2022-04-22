import React from "react";
import { Container } from "react-bootstrap";
import "./MindMapDiscussion.css";

const MindMapDiscussion = () => {
  return (
    <div>
      <Container className="MindMapDiscussion-Container">
        <h1>
          Question-MindMap(QMM): <br /> Can "WH" questions be connected in this
          way to help your brain focus on a topic?
        </h1>

        <h3>Watch the video below to learn about Question-MindMap(QMM).</h3>
        <div className="MindMapDiscussion-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/rOoiZRItRsg?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h3>Study the sample application of the Question Mindmap</h3>
        <center><img src="static/MindMapImage.jpg" alt="" /></center>

        <div className="home-button-MindMapDiscussion">
          <button class="get-started-MindMapDiscussion">
            <span class="circle-MindMapDiscussion" >
              <span class="icon-MindMapDiscussion arrow-MindMapDiscussion"></span>
            </span>
            <span class="button-text-MindMapDiscussion">Next</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MindMapDiscussion;
