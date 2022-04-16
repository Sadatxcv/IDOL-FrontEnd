import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
const Home = () => {
  React.useEffect(() => {});
  return (
    <div>
      <Container className="home-container">
        <br />
        <p className="home-para mt-3">
          This interactive workshop is for people who are curious and want to <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
