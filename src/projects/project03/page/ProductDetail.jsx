import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} alt="" />
                </Col>
                <Col className="product-info">
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div>{product?.choice === true ? 'Conscious choice' : '\u00A0'}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product.size.map((item, index) => (
                                <Dropdown.Item key={index} href={`#/action-${index}`}>
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className="" variant="dark">
                        추가
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
