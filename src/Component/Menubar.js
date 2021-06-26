import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Menubar() {
    return (
        <>
          
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Home Page</Navbar.Brand>

                <Nav>
                    <Nav.Link as={Link} to="/counter">Counter App</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/calculator">Calculator App</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/bmi">BMI App</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/budget">Budget App</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/list">Users CRUD App</Nav.Link>
                </Nav>
            </Navbar>

        </>
    );
}

export default Menubar;