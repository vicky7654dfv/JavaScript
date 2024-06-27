import React from "react";
import { Card } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NavbarEx=()=>{
    return(
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.item>
                    <Nav.item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.item>
                    <Nav.item>
                        <Nav.Link href="#disabled">Disabled</Nav.Link>
                    </Nav.item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead0-in to additional 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default NavbarEx;