import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// 1. 버튼을 클릭하면 작동하는 것을 만든다.
// 2. contactList의 name 과 input 이 같은지 검사한다.
// 3. 같은 것이 있으면 같은 것만 출력한다.
// 4. 키워드를 저장하고 ContactList 에서 처리하게 한다.

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const search = () => {
        dispatch({ type: 'SEARCH', payload: { keyword } });
    };

    return (
        <Row>
            <Col xs={10}>
                <Form.Control
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={(event) => setKeyword(event.target.value)}
                />
            </Col>
            <Col xs={2}>
                <Button onClick={search}>찾기</Button>
            </Col>
        </Row>
    );
};

export default SearchBox;
