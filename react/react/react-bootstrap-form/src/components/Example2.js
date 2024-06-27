import React from "react";
import { Container } from "react-bootstrap"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Example2=()=>{
    return(
        <div>
            <h1>Container Example2</h1>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 Of 3 wider</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 Of 3 wider</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Example2;