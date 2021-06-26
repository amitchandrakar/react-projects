import React, { useState } from 'react';
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap';
import { evaluate } from 'mathjs';
import Menubar from '../Menubar';

function BMICalculator() {

    let [unit, setUnit] = useState('metric');
    let [height, setHeight] = useState(0);
    let [weight, setWeight] = useState(0);
    let [BMI, setBMI] = useState(0);

    const handleUnit = (e) => {
        e.preventDefault();
        setUnit(e.target.value)
    }
   
    const handleHeight = (e) => {
        e.preventDefault();
        setHeight(e.target.value)
    }
    
    const handleWeight = (e) => {
        e.preventDefault();
        setWeight(e.target.value)
    }

    const handleCalculate = (e) => {
        e.preventDefault();

        let result = (unit === 'metric') ? evaluate(weight / height) : evaluate(703 * weight / height);
        setBMI(Math.round(result));
    }
    
    const handleClear = (e) => {
        e.preventDefault();

        setUnit('metric');
        setHeight(0);
        setWeight(0);
        setBMI(0);
    }

    const styles = {
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        mt: {
            marginTop: '5%'
        },
        mt2: {
            marginTop: '15px'
        },
        ml2: {
            marginLeft: '15px'
        }
    }

    return (
        <>
        <Menubar />
        
        <Container style={styles.mt}>
            <Row>
                <Col lg={6}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Units</Form.Label>
                            <Form.Control as="select" onChange={ handleUnit }>
                                <option value="metric">Metric</option>
                                <option value="imperial">Imperial</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" style={styles.mt2}>
                            <Form.Label>Weight (KG)</Form.Label>
                            <Form.Control name="weight" type="number" placeholder="Enter Weight" value={ weight } onChange={ handleWeight } />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={styles.mt2}>
                            <Form.Label>Height (CM)</Form.Label>
                            <Form.Control name="height" type="number" placeholder="Enter Height" value={ height } onChange={ handleHeight } />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={styles.mt2} onClick={ handleCalculate }>
                            Calculate
                        </Button>
                        <Button style={styles.ml2, styles.mt2} variant="danger" type="button" onClick={ handleClear }>
                            Clear
                        </Button>
                    </Form>
                </Col>

                <Col lg={6}>
                    <Table>
                        <thead>
                            <tr>
                            <th>BMI</th>
                            <th>BMI Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Less than 15</td>
                                <td>Very severely underweight</td>
                            </tr>
                            <tr>
                                <td>Between 15 and 16</td>
                                <td>Severely underweight</td>
                            </tr>
                            <tr>
                                <td>Between 16 and 18.5</td>
                                <td>underweight</td>
                            </tr>
                            <tr>
                                <td>Between 18.5 and 25</td>
                                <td>Normal (healthy weight)</td>
                            </tr>
                            <tr>
                                <td>Between 25 and 30</td>
                                <td>underweight</td>
                            </tr>
                            <tr>
                                <td>Between 30 and 35</td>
                                <td>Moderately obese</td>
                            </tr>
                            <tr>
                                <td>Between 35 and 40</td>
                                <td>Severely obese</td>
                            </tr>
                            <tr>
                                <td>Over 40</td>
                                <td>Very severely obese</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <h5 className="text-center mt-3">Your BMI value is {BMI}</h5>
            </Row>
        </Container>
        </>
    );

}

export default BMICalculator;