import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { SketchPicker } from 'react-color';
import { Form, Col, Row, Container} from 'react-bootstrap';

function Elements(props) {

    /* Datepicker */
    const [date, setStartDate] = useState(null);

    /* DateRangePicker */
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [color, setColor] = useState('#fff');
    const [showColorPicker, setShowColorPicker] = useState(false);

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



            


            {/* Color Picker */}
            <Form.Control
                required
                type="text"
                onFocus={ () => setShowColorPicker(true) }
                value={color}
            />
            {/* Color Picker */}

            {/* ColorPicker */}

            {
                showColorPicker &&
                <SketchPicker
                    color={color}
                    onChangeComplete={ (color) => {
                        setColor(color.hex);
                        // setShowColorPicker(false);
                    } }
                />
            }
            
            {/* ColorPicker */}



            {/* Datepicker */}
            <DatePicker 
                selected={date} 
                onChange={(date) => setStartDate(date)} 
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select Date Of Birth"
                timeFormat="HH:mm"
                locale="en-GB"
                showTimeSelect
                minDate={subDays(new Date(), 5)}
            />
            {/* Datepicker */}

            {/* DateRangePicker */}
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
            />
            {/* DateRangePicker */}

            

            

        </>
    );
}

export default Elements;