import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./About.css";

const About = () => {
  return (
    <div>
      <Container className="About-Container">
        <h1 className="text-center">ABOUT US</h1>
        <br/>
        <h6>Teaching Methodology for Online Learning</h6>
        <p className="about-para mt-3">The core strength of the Institute for the Development of Online Learning (IDOL) is a brain engagement technique called Extending Neuron Clusters (ENC) - utilizing neurons to build upon existing experiences. Developed over the years since 1978, ENC represents a paradigm shift in teaching methodology by engaging the students' brain to effectively learn and apply the learning process to different walks of life. All IDOL workshop products and packages reflect this core strength. Research has shown this methodology to visibly change the thinking mindset of the participants. IDOL invites you to utilize the training programs developed over the years to create an efficient workforce that builds on a solid foundation promoting self-esteem, critical thinking, learning and self-development.</p>

        <Card className="Purpose-Card">
          <Card.Body>
            <Row>
              <Col sm={5}><Card.Img className="Purpose-Image" src="static/Purpose.png" alt="Card image"/></Col>
              <Col sm={7}>
                <Card.Title><h4>PURPOSE</h4></Card.Title>
                <Card.Text>
                  <p className="purpose-para">
                    IDOL has been set up to form academic partnerships with stakeholders involved in the delivery of partial and/or full online education. The stakeholders include educational institutions, teachers, students, employers and regulatory bodies.
                  </p>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br/>

        <Card className="Philosophy-Vision-Card">
          <Card.Body>
            <Row>
              <Col sm={6}>
                <Card.Title><h4>PHILOSOPHY</h4></Card.Title>
                <Card.Text>
                  <p className="Philosophy-Para">
                    Each child and person has the right to develop their God-given brain to the fullest potential. The education delivery mechanism should therefore enable the development of critical thinking in each and every person. IDOL endorses and supports this philosophy to the fullest.
                  </p>
                </Card.Text>
              </Col>
              <Col sm={6}>
                <Card.Title><h4>VISION</h4></Card.Title>
                <Card.Text>
                  <p className="Vision-Para">
                    To support the development of effective online education systems that help to produce competent graduates.
                  </p>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br/>

        <Card className="Goals-Card">
          <Card.Body>
            <Row>
              <Col sm={7}>
                <Card.Title><h4>GOALS</h4></Card.Title>
                <Card.Text>
                  Each child and person has the right to develop their God-given brain to the fullest potential. The education delivery mechanism should therefore enable the development of critical thinking in each and every person. IDOL endorses and supports this philosophy to the fullest.
                </Card.Text>
                <br/>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li" className="Color text-muted">Developing effective pedagogy/andragogy models for lesson delivery</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Strategic planning for moving to online and blended education delivery</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Infrastructure development</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Effective student progress/learning monitoring systems</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Teacher training</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Course material development training</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Framework for lesson delivery</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Student study and learning support</ListGroup.Item>
                  <ListGroup.Item as="li" className="Color text-muted">Developing critical thinking assessment strategies</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={5}>
                <Card.Img className="Goals-Image" src="static/Goals.png" alt="Card image"/>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br/>

        <Card className="Contact-Card text-center">
          <Card.Body>
            <Card.Title><h2>Establish yourself as an education leader.</h2></Card.Title>
            <Card.Text className="text-muted">
              <h6>Empower your students to learn, get feedback and motivate to improve.</h6> 
            </Card.Text>
            <a href="/contact"><Button className="Contact-Button" size="lg">contact us</Button></a>
          </Card.Body>
        </Card>

        <br/>

        <Card.Footer className="Footer-Card text-center">IDOL © 2020 All rights reserved.</Card.Footer>

      </Container>
    </div>
  );
};

export default About;