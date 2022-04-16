import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";

const Home = () => {
  React.useEffect(() => {
    window.onscroll = function() {
      var target = document.getElementById("target");
    
      var height = window.innerHeight;
    
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
      // Change this if you want it to fade faster
      height = height / 1;
    
      target.style.opacity = (height - scrollTop) / height;
      target.style.transform = height;
    
    };
  });
  return (
    <div>
      <div className="parallax" id="target">

      </div>
      <Container className="home-container">
        <br />
        <p className="home-para mt-3">
          This interactive workshop is for people who are curious and want to <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim totam dolore maxime pariatur neque debitis nihil iusto, alias itaque iure eius sint fuga quaerat quisquam aliquid voluptatibus, cumque culpa quod. Explicabo perferendis sequi itaque cum facere animi, eius ipsum repellat numquam incidunt sed laudantium, velit nulla totam ullam unde necessitatibus. Hic delectus doloribus repellat tempore, architecto illum iusto porro. Non repellendus odit ipsam autem aliquam eum, quod aliquid hic facere facilis enim expedita corrupti, debitis pariatur voluptates culpa perspiciatis distinctio et sunt eos commodi quos rerum?
          <br />
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
      </Container>
    </div>
  );
};

export default Home;
