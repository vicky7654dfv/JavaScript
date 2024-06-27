import React from 'react'
import { Form } from 'react-bootstrap'

const FormEx = () => {
  return (
    <div>
        <h1>Form Example</h1>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='example@abc.com'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter the password'></Form.Control>
            </Form.Group>
        </Form>
    </div>
  )
}
export default FormEx