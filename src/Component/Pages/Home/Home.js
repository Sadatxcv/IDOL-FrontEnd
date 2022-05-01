import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";

const Home = () => {
  React.useEffect(() => {
    window.onscroll = function () {
      var target = document.getElementById("target");

      var height = window.innerHeight;

      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      // Change this if you want it to fade faster
      height = height / 1;

      target.style.opacity = (height - scrollTop) / height;
    };
  });
  return (
    <div>
      <div className="parallax" id="target"></div>
      <Container className="home-container">
        <br />
        <p className="home-para mt-3">
          This interactive workshop is for people who are curious and want to
          learn as opposed to memorizing the subjects that they are studying.
          The workshop is participatory, i.e., it engages the participants to
          apply effective brain techniques to focus and learn. The learning from
          the workshop is designed to set the participants on a life-long
          journey of self-learning to become independent learners that would set
          them on the right track to succeed in life. In addition, participants
          will be able to use a questioning technique to focus their brain and
          learn better.
        </p>
        <br />
        <br />
        <h2>Why do this course?</h2>
        <br />
        <li>To learn an effective way to use the brain</li>
        <br />

        <h2>What will be gained from this course?</h2>
        <br />
        <li>
          Develop a Question-Mind-Map technique that can be applied to any area
          of life
        </li>
        <br />
        <h2>Who should do this course?</h2>
        <br />
        <li>
          This course is for those who wish to learn the art of asking effective
          questions to enhance their learning
        </li>
        <br />
        <h2>To get certified complete the following steps in this website:</h2>
        <br />
        <br/>
        <div className="home-bottom" ><img className="home-bottomimg" src="static/image.jpg" alt="" /></div>
        <br />

        <div className="home-button">
          <button class="get-started ">
            <span class="circle" >
              <span class="icon arrow"></span>
            </span>
            <span class="button-text"> <a href="/userform">Get Started</a> </span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
