import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import Menubar from '../Menubar';
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Constants } from "../../constants";

export function Index()
{
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const MySwal = withReactContent(Swal);
    const history = useHistory();

    const loadUsers = async () => {
        const result = await axios.get(`${Constants.api_base_url}/users`);
        setUsers(result.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const actionsFormatter = (cell, row, rowIndex, formatExtraData) => {
        return <>
            <Button className="mr-2" variant="outline-success" onClick={handleShow}>Show </Button>
            <Button className="mr-2" variant="outline-primary" onClick={ () => history.push(`/edit/${row.id}`) }>Edit</Button>
            <Button variant="outline-danger" onClick={() => handleDelete(row.id)}>Delete</Button>
        </>
    };

    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'username', text: 'Username', sort: true },
        { dataField: 'email', text: 'Email Id', sort: true },
        { dataField: 'phone', text: 'Phone', sort: true },
        { dataField: 'action', text: 'Action', sort: false, formatter: actionsFormatter },
    ];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 20,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log(page);
            console.log(sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log(page);
            console.log(sizePerPage);
        }
    });

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
                    axios.delete(`${Constants.api_base_url}/users/${id}`);
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
                        <Link to="/create" >
                            <Button type="button" variant="primary" className="mt-2 mr-2 mb-2">
                                Create Employee
                            </Button>
                        </Link>
                        
                        <BootstrapTable
                            bootstrap4
                            keyField='id'
                            columns={columns}
                            data={users}
                            pagination={pagination}
                        />
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