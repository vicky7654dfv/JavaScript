import { Button } from "react-bootstrap/Button";
import { Card } from "react-bootstrap/Card";

function BasicExample(){
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/img1.jpeg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        fgjkvbglbvt b tbvtyr t vbrvtbv bt vg bv b tb rgv rv rv  bvr  rv rtbv 
                        brgb tb vtb t b bv btvt.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardText