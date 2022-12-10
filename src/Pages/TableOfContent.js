import React from 'react';
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap';
import { Link } from "react-router-dom";

function TableOfContent() {
    return (
        <>

            <Container className="mt-5">

                <Row>
                    <Col>
                        <Form>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th colSpan="6" className="text-center bg-dark text-white">Sample React Applications (Beginner to Advanced)</th>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Project Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Difficulty Level</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>1</td>
                                        <td>Simple Counter App</td>
                                        <td>This was my first react task project</td>
                                        <td>Completed</td>
                                        <td>
                                            0.1/10 😅
                                        </td>
                                        <td className="text-right">
                                            <Link to="/counter">
                                                <Button variation="warning">View Demo</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Calculator App</td>
                                        <td>A calculator with all basic functionalities</td>
                                        <td>Completed</td>
                                        <td>
                                            2/10
                                        </td>
                                        <td className="text-right">
                                            <Link to="/calculator">
                                                <Button variation="warning">View Demo</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>BMI calculator</td>
                                        <td>works on Metric and Imperial as well</td>
                                        <td>Completed</td>
                                        <td>
                                            2.5/10
                                        </td>
                                        <td className="text-right">
                                            <Link to="/bmi">
                                                <Button variation="warning">View Demo</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Budget App</td>
                                        <td>I'm storing date, price and description here</td>
                                        <td>In Progress</td>
                                        <td>
                                            3/10
                                        </td>
                                        <td className="text-right">
                                            <Link to="/budget">
                                                <Button variation="warning">View Demo</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Users CRUD</td>
                                        <td>I've used fake json-server here as database and performing all operations there</td>
                                        <td>Completed</td>
                                        <td>
                                            3.4/10 🤓
                                        </td>
                                        <td className="text-right">
                                            <Link to="/list">
                                                <Button variation="warning">View Demo</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>React Datatable</td>
                                        <td>Will implement Datatable here</td>
                                        <td>Planned</td>
                                        <td>
                                            🤫
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Form Repeater</td>
                                        <td>Will implement something like <b>"ADD MORE"</b> on form fields</td>
                                        <td>Planned</td>
                                        <td>
                                            🤫
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Login & Register forms with validation</td>
                                        <td>It will be same as real one</td>
                                        <td>Planned</td>
                                        <td>
                                            🤫
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Will Work on modals, popups, sweet-alert, toast, select2, choosen</td>
                                        <td>Will Work on modals, popups, sweet-alert, toast, select2, choosen</td>
                                        <td>Planned</td>
                                        <td>
                                            🤫
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Working with localization</td>
                                        <td>Will use multiple language support here </td>
                                        <td>Planning</td>
                                        <td>
                                            🧠
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Minor Project</td>
                                        <td>still planning about it 🤔 Do you have any suggestion ? 😋</td>
                                        <td>Planning</td>
                                        <td>
                                            🤫
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Major Project</td>
                                        <td>Will use <b>REDUX</b> here </td>
                                        <td>Planning</td>
                                        <td>
                                            🧠
                                        </td>
                                        <td className="text-right">
                                            <Button variation="warning">Coming Soon</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default TableOfContent;