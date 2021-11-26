import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark'>
           <Container>
 
  <Row xs={1} md={2}>
    <Col>
        <h3 className='text-white mt-2'>ABOUT US</h3>
        <p className='text-white'>Tour Guide is a tour egency company in Bangladesh</p>
        <p className='text-white'>Banani Dhaka Bangladesh</p>
        <p className='text-white'>Call : 01475544142</p>
        <p className='text-white'>email : asdf@gmail.com</p>
    </Col>
    <Col >
        <h3 className='text-white mt-2'>Join With Us</h3>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='text-white'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='text-white'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <button className='text-dark bg-warning border-0 rounded p-2 mb-2'>Join with us</button>
</Form>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;