import React from "react";
import { Container } from "react-bootstrap";
import "./DiscussionThree.css";

const DiscussionThree = () => {
  return (
    <div>
      <Container className="DiscussionThree-Container">
        <h1>Benefits of asking questions</h1>
        <h3>Watch the video below</h3>

        <div className="DiscussionThree-Video-Container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/86-OHeiQpcs?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <center>
          <img src="static/Discussion-3_image-1.jpg" alt="discussion_img" />
          <br />
          <br />
          <img src="static/Discussion-3_image-2.jpg" alt="discussion_img" />
        </center>

        <br />

        <div className="home-button-DiscussionThree">
          <button class="get-started-DiscussionThree">
            <span class="circle-DiscussionThree">
              <span class="icon-DiscussionThree arrow-DiscussionThree"></span>
            </span>
            <a href="/challenge-3">
              <span class="button-text-DiscussionThree">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionThree;
