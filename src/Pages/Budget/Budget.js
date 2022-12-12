import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Jumbotron, Form, Button} from 'react-bootstrap';
import Menubar from '../Menubar';
import BudgetData from "../../Components/Budget/BudgetData";
import axios from 'axios';
import { Constants } from '../../constants';
import { toast } from 'react-toastify';

function Budget() 
{
  const [budgets, setBudgets] = useState([]);

  const [userData, setUserData] = useState({
    'title': '',
    'amount': '',
    'date': '',
  });

  const {title, amount, date} = userData;

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(title === '' || amount === '' || date === ''){
      toast.error("Invalid inputs. Please add valid values in the input fields");
      return false;
    }

    await axios.post(`${Constants.api_base_url}/budgets`, userData);
    toast.success("Success...! Budget added successfully.");
    loadBudgets();
    resetForm();
  }
  
  const handleFilter = async e => {
    e.preventDefault();

    if (e.target.value !== ''){
      const result = await axios.get(`${Constants.api_base_url}/budgets?date_like=${e.target.value}`);
      setBudgets(result.data);
    } else {
      loadBudgets();
    }
  }

  const loadBudgets = async () => {
    const result = await axios.get(`${Constants.api_base_url}/budgets`);
    setBudgets(result.data);
  }
  
  const resetForm = async () => {
    setUserData({
      'title': '',
      'amount': '',
      'date': '',
    });
  }

  useEffect(() => {
    document.title = 'Budget App';
    loadBudgets();
  }, []);

  return (
      <>
      <Menubar />
      
      <Container>
        <Row>
          <Col>
            <Jumbotron fluid className="jumbotron-form">
              <Container>
                <Form onSubmit={ handleSubmit }>
                  <Row>
                    <Col>
                      <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={title} onChange={handleInput} placeholder="Enter title" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" name="amount" value={amount} onChange={handleInput} placeholder="Enter amount" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" value={date} onChange={handleInput} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col className="pl-0">
                    <Button variant="primary" className="expense-btn" type="submit">Add Expense</Button>
                  </Col>
                </Form>
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
                      <Form.Control as="select" onChange={handleFilter}>
                        <option value="">Year Filter</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                {
                    budgets.map((budget) => {
                      return <BudgetData key={budget.id} date={budget.date} title={budget.title} amount={budget.amount} />
                    })
                }

              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      </>
  );
}

export default Budget;