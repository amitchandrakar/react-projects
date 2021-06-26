import React, { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Menubar from '../Menubar';

function Counter(props) {

    let [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        counter -= 1;
        counter = counter <= 0 ? 0 : counter;
        setCounter(counter);
    }
    
    const incrementCounter = () => {
        counter += 1;
        setCounter(counter);
    }

    const styles = {
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        mt: {
            marginTop: '30px'
        }
    }

    return (
        <>
            <Menubar />
            <Container>
                <Row style={styles.mt}>
                    <Col style={styles.center}>
                        <Button variant="primary" onClick={()=>{ decrementCounter() }}>-</Button>
                            <Form.Control type="number" placeholder="Counter" value={counter} />
                        <Button variant="primary" onClick={()=>{ incrementCounter() }}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        The Value of counter is : {counter}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Counter;