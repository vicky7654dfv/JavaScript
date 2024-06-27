import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4">
        <h2 className="text-center">IMARTICUS LEARNING</h2>
        <p className="text-center">Please enter your login and password!</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="link" className='mt-3 text-center'>
            Forgot password?
          </Button>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <p display="inline">Don't have an account?

          <Button variant="link" className="w-100">Sign Up</Button>
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
