import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Menubar from '../Menubar';
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Constants } from "../../constants";

export function Edit()
{
    const { id } = useParams();
    const history = useHistory();

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });
    
    const { name, username, email, phone } = userData;

    const loadData = async () => {
        let result = await axios.get(`${Constants.api_base_url}/users/${id}`);
        setUserData(result.data);
    }

    useEffect(() => {
        document.title = 'Edit user';
        loadData();
    });

    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put(`${Constants.api_base_url}/users/${id}`, userData);
        history.push("/list");
    }

    return (
        <>
          
            <Menubar />

            <Container className="mt-5">

                <Row>
                    <Col>
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" value={name} onChange={handleInput} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter your username" name="username" value={username} onChange={handleInput} />
                            </Form.Group>
                            
                            <Form.Group className="mt-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={handleInput} />
                            </Form.Group>
                            
                            <Form.Group className="mt-2">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Enter your phone" name="phone" value={phone} onChange={handleInput} />
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