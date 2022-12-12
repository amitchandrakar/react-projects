import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import moment from 'moment';

function BudgetData(props) 
{
    let date = null;
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [day, setDay] = useState('');

    useEffect(() => {
        date = moment(props.date, 'YYYY-MM-DD');
        setDay(date.format('D'));
        setYear(date.format('YYYY'));
        setMonth(date.format('MMMM'));
    }, []);

    return (
        <>
            <Row>
                <Col className="budget-data-content">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="budget-date">
                                <div className="text-center text-bold">{month}</div>
                                <div className="text-center p-0">{year}</div>
                                <h2 className="text-center">{day}</h2>
                            </div>
                            <div className="pl-30 mr-3">
                                {props.title}
                            </div>
                            <div className="budget-price">
                                ${props.amount}
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default BudgetData;