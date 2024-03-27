import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/brandPage.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    async function getProducts() {
        let searchQuery = query.get('q') || '';
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    {productList.map((item, index) => (
                        <Col key={index} lg={3}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
