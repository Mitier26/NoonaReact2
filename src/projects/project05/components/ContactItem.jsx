import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ContactItem = ({ item }) => {
    const dispatch = useDispatch();
    let contactList = useSelector((state) => state.contactList);

    const phoneModify = () => {
        const newName = prompt('새로운 이름을 입력해 주세요', item.name);
        const newPhoneNumber = prompt('새로운 이름을 입력해 주세요', item.phoneNumber);

        if (newName && newPhoneNumber) {
            const modifiedItem = { ...item, name: newName, phoneNumber: newPhoneNumber };

            // 연락처 목록을 복사하고 수정된 연락처로 대체
            const updatedList = contactList.map((contact) => {
                if (contact.id === item.id) {
                    return modifiedItem;
                }
                return contact;
            });

            // 수정된 연락처 목록을 업데이트
            dispatch({ type: 'UPDATE_CONTACT_LIST', payload: { contactList: updatedList } });
        }
    };

    const phoneDelete = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('정말로 삭제하시겠습니까?')) {
            const deleteId = item.id;
            const updatedList = contactList.filter((contact) => contact.id !== deleteId);
            dispatch({ type: 'UPDATE_CONTACT_LIST', payload: { contactList: updatedList } });
        }
    };

    return (
        <Row className="phone-item">
            <Col xs={3}>
                <img
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
                    alt=""
                />
            </Col>

            <Col xs={9}>
                <div className="phone-info">이름: {item.name}</div>
                <div className="phone-info">번호: {item.phoneNumber}</div>
            </Col>

            <div className="phone-item-buttons">
                <Button className="phone-modify" variant="success" onClick={phoneModify}>
                    수정
                </Button>
                <Button className="phone-delete" variant="danger" onClick={phoneDelete}>
                    삭제
                </Button>
            </div>
        </Row>
    );
};

export default ContactItem;
