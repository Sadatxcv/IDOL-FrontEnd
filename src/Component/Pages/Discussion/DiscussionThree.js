import React from "react";
import { Container } from "react-bootstrap";
import "./Discussion.css";

const DiscussionThree = () => {
  return (
    <div>
      <Container className="Discussion-Container">
        <h1>
          Can you come up with a specific topic that you would like to know more
          about?
        </h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="Discussion-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WMj1ag7JzC0?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/Discussion-4_image-1.jpg" alt="discussion_img" />
        </center>
        <h3 className="text-center">Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-Discussion">
          <button class="get-started-Discussion">
            <span class="circle-Discussion">
              <span class="icon-Discussion arrow-Discussion"></span>
            </span>
            <a href="/challenge-4">
              <span class="button-text-Discussion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionThree;
