import React from "react";
import { Container } from "react-bootstrap";
import "./Discussion.css";

const DiscussionOne = () => {
  return (
    <div>
      <Container className="Discussion-Container">
        <h1>
          As a child were you curious? Did you ask questions? In your opinion,
          why did you ask questions?
        </h1>

        <div className="Discussion-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WkXr6nNK0Cs?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />

        <h3 className="text-center">Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-Discussion">
          <button class="get-started-Discussion">
            <span class="circle-Discussion">
              <span class="icon-Discussion arrow-Discussion"></span>
            </span>
            <a href="/challenge-2">
              <span class="button-text-Discussion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionOne;
