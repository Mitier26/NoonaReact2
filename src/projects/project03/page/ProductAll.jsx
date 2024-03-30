import React, { useEffect, useState } from 'react';
import '../css/brandPage.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({ authenticate, setAuthenticate }) => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    async function getProducts() {
        let searchQuery = query.get('q') || '';
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
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
