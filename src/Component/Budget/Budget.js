import React from 'react';
import {Container, Row, Col, Jumbotron, Form, Button} from 'react-bootstrap';
import '../Budget/style.css';
import Menubar from '../Menubar';

function Budget() {
    return (
       <>
       <Menubar />
       
        <Container>
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-form">
                <Container>
                  <Row>
                    <Col>
                      <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Col>
                    <Button variant="primary" className="expense-btn" type="submit">Add Expense</Button>
                  </Col>

                </Container>
              </Jumbotron>

              <Jumbotron fluid className="jumbotron-list">
                <Container>
                  <Row>
                    <Col className="d-flex">
                      <h4>Filter By Year</h4>
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                      <Form.Group className="year-filter">
                        <Form.Control as="select">
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                          <option>2017</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="budget-data-content">
                      <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="budget-date">
                                <div className="text-center text-bold">March</div>
                                <div className="text-center p-0">2021</div>
                                <h2 className="text-center">12</h2>
                            </div>
                            <div className="pl-30">
                              this ia hbfhd sbasdkjgsjak sakgsadjhk dsbgsjhda bgsjgab kgjsabbgahsuk suobr qugrbeugkbsuearkabf aukhgfb ausbuasbf sudjhfbsuyfhbsdku fbsdufbsdufbsdb afbsdgabfjhs s ubsady sdy sadh fgysdyay
                            </div>
                            <div className="budget-price">
                              $1111.00
                            </div>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                  
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>

       </>
    );
}

export default Budget;