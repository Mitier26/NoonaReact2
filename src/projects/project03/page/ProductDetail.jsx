import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.size);
        setProduct(data);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <>
            <Navbar />
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

                            {product?.size.length > 0 ? (
                                <Dropdown.Menu>
                                    {product.size?.map((item, index) => (
                                        <Dropdown.Item key={index} href={`#/action-${index}`}>
                                            {item}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            ) : null}
                        </Dropdown>
                        <Button className="" variant="dark">
                            추가
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;
