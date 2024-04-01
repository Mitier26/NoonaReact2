import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col xs={3}>
                <img
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
                    alt=""
                />
            </Col>

            <Col xs={9}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
