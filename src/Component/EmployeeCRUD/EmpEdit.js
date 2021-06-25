import React from 'react';
import {Container, Row, Col, Form, Button, Navbar, Nav} from 'react-bootstrap';
import '../EmployeeCRUD/style.css';
import Menubar from './Menubar';
import { Link } from "react-router-dom";

function EmpEdit() {
    return (
        <>
          
            <Menubar />

            <Container className="mt-5">

                <Row>
                    <Col>
                        
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword" className="mt-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword" className="mt-2">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="number" placeholder="Enter your contact" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-2 mr-2">
                                Submit
                            </Button>
                            <Link to="/">
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

export default EmpEdit;