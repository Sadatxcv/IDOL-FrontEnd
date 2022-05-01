import React from "react";
import { Container } from "react-bootstrap";
import "./DiscussionFour.css";

const DiscussionFour = () => {
  return (
    <div>
      <Container className="DiscussionFour-Container">
        <h1>
          Can you come up with a specific topic that you would like to know more
          about?
        </h1>
        <h3>Watch the video below and compare your answers with others</h3>
        <div className="DiscussionFour-Video-Container">
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
        <h3>Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-DiscussionFour">
          <button class="get-started-DiscussionFour">
            <span class="circle-DiscussionFour">
              <span class="icon-DiscussionFour arrow-DiscussionFour"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-DiscussionFour">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionFour;
