import React from "react";
import { Container } from "react-bootstrap";
import "./DiscussionOne.css";

const DiscussionOne = () => {
  return (
    <div>
      <Container className="DiscussionOne-Container">
        <h1>
          As a child were you curious? Did you ask questions? In your opinion,
          why did you ask questions?
        </h1>

        <div className="DiscussionOne-Video-Container">
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

        <div className="home-button-DiscussionOne">
          <button class="get-started-DiscussionOne">
            <span class="circle-DiscussionOne">
              <span class="icon-DiscussionOne arrow-DiscussionOne"></span>
            </span>
            <a href="/challenge-2">
              <span class="button-text-DiscussionOne">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionOne;
