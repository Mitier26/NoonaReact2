import React from 'react';
import DuckUp from '../components/DuckUp';
import Duck from '../components/Duck';
import DuckCoin from '../components/DuckCoin';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../css/reducks.css';
import { Col, Container, Row } from 'react-bootstrap';
import HomeButton from '../../../HomeButton';

const Reducks = () => {
    return (
        <Provider store={store}>
            <Container>
                <HomeButton />
                <Row className="game-board">
                    <Col xs={8} className="left">
                        <DuckCoin />
                        <Duck />
                        <div></div>
                    </Col>
                    <Col xs={4} className="right">
                        <DuckUp />
                    </Col>
                </Row>
            </Container>
        </Provider>
    );
};

export default Reducks;
