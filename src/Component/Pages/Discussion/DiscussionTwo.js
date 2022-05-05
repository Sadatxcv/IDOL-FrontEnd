import React from "react";
import { Container } from "react-bootstrap";
import "./Discussion.css";

const DiscussionTwo = () => {
  return (
    <div>
      <Container className="Discussion-Container">
        <h1>
        As adults, if you are curious about something what kind of questions can you ask? Can you think about it and give examples?
        </h1>
        <br/>
        <h3>Watch the video below and compare your answers with others.</h3>

        <div className="Discussion-Video-Container">
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

        <div className="home-button-Discussion">
          <button class="get-started-Discussion">
            <span class="circle-Discussion">
              <span class="icon-Discussion arrow-Discussion"></span>
            </span>
            <a href="/mindmapdiscussion">
              <span class="button-text-Discussion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DiscussionTwo;
