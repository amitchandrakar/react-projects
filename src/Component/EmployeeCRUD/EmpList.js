import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap';
import '../EmployeeCRUD/style.css';
import Menubar from './Menubar';
import { Link } from "react-router-dom";


function EmpList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data);
    }


    return (
        <>
          
            <Menubar />

            <Container className="mt-5">

                <Row>
                    <Col>
                        <Form>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email Id</th>
                                    <th>Zip Code</th>
                                    <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        users.map((user, index) => {
                                            return <tr>
                                                <td>{ index + 1 }</td>
                                                <td>{ user.name }</td>
                                                <td>{ user.username }</td>
                                                <td>{ user.email }</td>
                                                <td>{ user.address.zipcode}</td>
                                                <td className="text-right">

                                                    <Link to={`/edit/${user.id}`}>
                                                        <Button className="mr-2" variant="outline-primary">Edit</Button>
                                                    </Link>

                                                    <Button variant="outline-danger">Delete</Button>
                                                </td>
                                            </tr>
                                        })
                                    }


                                </tbody>
                            </Table>
                        </Form>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default EmpList;