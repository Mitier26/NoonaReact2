import React from 'react';
import '../css/phoneBook.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomeButton from '../../../HomeButton';
// 1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 search창이 있다.
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 3. 리스트에 아이템 몇개있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

const PhoneBook = () => {
    return (
        <Provider store={store}>
            <HomeButton />
            <div className="phone">
                <h1 className="phone-title">연락처</h1>
                <Container className="phone-container">
                    <Row>
                        <Col className="phone-left">
                            <ContactForm />
                        </Col>
                        <Col>
                            <ContactList />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Provider>
    );
};

export default PhoneBook;
