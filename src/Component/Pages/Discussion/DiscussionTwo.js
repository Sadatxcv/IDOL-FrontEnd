import React from "react";
import { Container } from "react-bootstrap";
import "./DiscussionTwo.css";

const DiscussionTwo = () => {
  return (
    <div>
      <Container className="DiscussionTwo-Container">
        <h1>
          As a child were you curious? Did you ask questions? In your opinion,
          why did you ask questions?
        </h1>

        <div className="DiscussionTwo-Video-Container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/getLQChGA8E?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/Discussion-2_image-1.jpg" alt="discussion_img" />
        </center>
        <h3>Now click "Next" to answer the following question.</h3>

        <br />

        <div className="home-button-DiscussionTwo">
          <button class="get-started-DiscussionTwo">
            <span class="circle-DiscussionTwo">
              <span class="icon-DiscussionTwo arrow-DiscussionTwo"></span>
            </span>
            <a href="/Discussion">
              <span class="button-text-DiscussionTwo">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionTwo;
