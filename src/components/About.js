import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Abouts() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            
            <strong className="me-auto">Shishir Pathak</strong>
            <small>Full Stack Develpoer</small>
          </Toast.Header>
          <Toast.Body>I am a passionate developer in MERN Stack.</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>About Me</Button>
      </Col>
    </Row>
  );
}

export default Abouts;