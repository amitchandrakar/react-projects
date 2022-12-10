import React, { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../Employees/style.css';
import Menubar from '../Menubar';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

function EmpCreate() 
{
    let history = useHistory();
    
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "" 
    });

    const {name, username, email, phone} = userData;

    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        console.log(userData);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:8000/users', userData);
        toast.success("Success...! User Added.");
        history.push("/list");
    }

    return (
        <>
            <Menubar />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Form onSubmit={ handleSubmit }>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" value={name} onChange={ handleInput } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter your username" name="username" value={username} onChange={ handleInput } />
                            </Form.Group>
                            
                            <Form.Group className="mt-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={ handleInput } />
                            </Form.Group>
                            
                            <Form.Group className="mt-2">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Enter your phone" name="phone" value={phone} onChange={ handleInput } />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-2 mr-2">
                                Submit
                            </Button>

                            <Link to="/list">
                                <Button type="button" variant="warning" className="mt-2 mr-2">
                                    Go Back
                                </Button>
                            </Link>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EmpCreate;