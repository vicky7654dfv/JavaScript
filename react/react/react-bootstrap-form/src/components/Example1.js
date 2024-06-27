import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import  Col from 'react-bootstrap/Col'

const Example1=()=>{
    return(
        <div>
        <h1>Grid Container</h1>
        <Container fluid>
        <Row>
            <Col><h4>Imarticus Learning</h4></Col>
            <Col><h4>FSD Program</h4></Col>
            <Col><h4>React js</h4></Col>
            <Col><h4>MongoDB</h4></Col>
        </Row>
        <Col>-----------------------------------</Col>
        <Col>-----------------------------------</Col>
        <Col>-----------------------------------</Col>
        <Row>
            <Col><h2>Course Content</h2></Col>
            <Col><h2>Course Fee</h2></Col>
        </Row>
        </Container>
        </div>
    )
}

export default Example1