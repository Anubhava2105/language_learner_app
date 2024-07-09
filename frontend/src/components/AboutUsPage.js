import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUsPage() {
  return (
    <Container>
      <h1 className="my-4 text-center">About Us</h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide the best services to our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                Our vision is to be the leading company in our industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We value integrity, excellence, and respect for individuals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsPage;
