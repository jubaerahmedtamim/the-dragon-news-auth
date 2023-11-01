import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';


const Register = () => {

    const { createUser,  } = useContext(AuthContext);

    const [ accepted, setAccepted] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                        onClick={handleAccepted}
                        type='checkbox' 
                        name='accept' 
                        label= {<>Accept our<Link to='/terms'>Terms & Conditions.</Link> </>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account? <Link to='/Login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;