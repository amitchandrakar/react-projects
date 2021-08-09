import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Button, Table, Modal} from 'react-bootstrap';
import '../EmployeeCRUD/style.css';
import Menubar from '../Menubar';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';


function EmpList() {

    const [users, setUsers] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8000/users");
        setUsers(result.data);
    }

    const handleDelete = async id => {


        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(`http://localhost:8000/users/${id}`);
                    loadUsers();

                    toast.success("Success...! User Deleted.");

                }
            })
    }

    return (
        <>
          
            <Menubar />

            <Container className="mt-5">

                <Row>
                    <Col>
                        <Form>
                            <Link to="/create">
                                <Button type="button" variant="primary" className="mt-2 mr-2">
                                    Create Employee
                                </Button>
                            </Link>
                            <Table striped bordered hover className="mt-2">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email Id</th>
                                    <th>Phone</th>
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
                                                <td>{ user.phone}</td>
                                                <td className="text-right">

                                                <Button className="mr-2"  variant="outline-success" onClick={handleShow}>
                                                    Show
                                                </Button>

                                                    <Link to={`/edit/${user.id}`}>
                                                        <Button className="mr-2" variant="outline-primary">Edit</Button>
                                                    </Link>

                                                    <Button variant="outline-danger" onClick={ () => handleDelete(user.id) }>Delete</Button>
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


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default EmpList;