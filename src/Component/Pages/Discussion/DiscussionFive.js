import React from "react";
import { Container } from "react-bootstrap";
import "./DiscussionFive.css";

const DiscussionFive = () => {
  return (
    <div>
      <Container className="DiscussionFive-Container">
        <h1>
        Can you share your mindmap with others
        </h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="DiscussionFive-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HrVBmWLbw-A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/Discussion-5_image-1.jpg" alt="discussion_img" />
          <img src="static/Discussion-5_image-2.jpg" alt="discussion_img" />
        </center>
        <h3>Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-DiscussionFive">
          <button class="get-started-DiscussionFive">
            <span class="circle-DiscussionFive">
              <span class="icon-DiscussionFive arrow-DiscussionFive"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-DiscussionFive">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionFive;
