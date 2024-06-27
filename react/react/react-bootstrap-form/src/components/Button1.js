import React from 'react'
import { Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'

const Button1 =()=>{
    return(
        <Stack direction="horizontal" gap={3}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Primary</Button>
            <Button variant="success">Primary</Button>
            <Button variant="warning">Primary</Button>
            <Button variant="danger">Primary</Button>
            <Button variant="info">Primary</Button>
            <Button variant="light">Primary</Button>
            <Button variant="dark">Primary</Button>
            <Button variant="link">Primary</Button>
        </Stack>
    )
}

export default Button1;