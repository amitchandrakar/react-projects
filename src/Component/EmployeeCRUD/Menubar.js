import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../EmployeeCRUD/style.css';
import { Link } from "react-router-dom";


function Menubar() {
    return (
        <>
          
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Employee CRUD Example</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/create">Create Employee</Nav.Link>
                </Nav>
            </Navbar>

        </>
    );
}

export default Menubar;