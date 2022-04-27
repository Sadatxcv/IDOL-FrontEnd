import React from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <br/>
      <Container className="Message-Contact">
        <Row>
          <Col sm={8}>
            <br/>
            <Card className="Message-Card">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title><h2>contact us</h2></Card.Title>
                    <Card.Text className="text-muted"><p>IDOL - Your academic partner for online education delivery success. If you want know more about our services or have any quires, please leave a message. Our team will get in touch wit you soon.</p>
                    </Card.Text>

                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Hi there, I'm reaching out because i think we can collabrate..." rows={3} style={{ height: '200px' }} />
                      </Form.Group>
                    </Form>
                    <div className="d-grid gap-2">
                      <Button className="submit-button" type="submit" size="lg">Submit</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={{ span: 0 , offset: 1 }}>
            <br/>
            <div className="box">
              <Card.Title className="text-title">OUR OFFICE</Card.Title>
              <Card.Text className="text-muted">
                <p>House 528, Road 10, <br/>
                Baridhara DOHS, Dhaka 1212, <br/>
                Bangladesh.</p> 
              </Card.Text>
            </div>

            <br/>

            <div className="box">
              <Card.Title className="text-title">WORKING HOURS</Card.Title>
              <Card.Text className="text-muted">
                <p>11AM - 7PM, SAT to THURS</p>
              </Card.Text>
            </div>
            
            <br/>
            <div className="box">
              <Card.Title className="text-title">CONTACT</Card.Title>
              <Card.Text className="text-muted">
                <p>info@idol.works <br/> +88 01789 512851, <br/> +88 01703 498275 </p>
              </Card.Text>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;