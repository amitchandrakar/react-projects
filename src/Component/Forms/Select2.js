import React, { useState } from "react";

import { Form, Col, Row, Container} from 'react-bootstrap';

function Select2(props) {

    /* Datepicker */
    const [date, setStartDate] = useState(null);

    return (
        <>

            <Container fluid>
            <Row>
                <Col sm={5}>
                    <Form.Control as="select">
                        <option key="1" value="cacs">AMIT</option>
                        <option key="1" value="cacs">AMIT</option>
                        <option key="1" value="cacs">AMIT</option>
                        <option key="1" value="cacs">AMIT</option>
                        <option key="1" value="cacs">AMIT</option>
                        <option key="1" value="cacs">AMIT</option>
                    </Form.Control>
                </Col>
            </Row>
            </Container>

        </>
    );
}

export default Elements;