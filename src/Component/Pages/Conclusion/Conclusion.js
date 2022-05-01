import React from "react";
import { Container } from "react-bootstrap";
import "./Conclusion.css";

const Conclusion = () => {
  return (
    <div>
      <Container className="Conclusion-Container">
        <h1>Benefits of asking questions</h1>
        <h3>Watch the video below</h3>

        <div className="Conclusion-Video-Container">
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

        <div className="home-button-Conclusion">
          <button class="get-started-Conclusion">
            <span class="circle-Conclusion">
              <span class="icon-Conclusion arrow-Conclusion"></span>
            </span>
            <a href="/challenge-3">
              <span class="button-text-Conclusion">Next</span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Conclusion;
