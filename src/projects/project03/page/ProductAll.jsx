import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/brandPage.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    async function getProducts() {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col lg={3}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
