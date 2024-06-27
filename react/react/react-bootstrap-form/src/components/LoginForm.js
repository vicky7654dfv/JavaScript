import { Button, Form } from "react-bootstrap";

function LoginForm(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formbasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
                <Form.Text className="text-muted">We'll never share your email</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Check type="checkbox" label="Check me out"></Form.Check>
                <Form.Control type="password" placeholder="password"></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">submit</Button>

        </Form>
    )
}

export default LoginForm;