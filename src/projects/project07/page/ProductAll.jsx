import React, { useEffect, useState } from 'react';
import '../css/brandPage.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productReducer';

const ProductAll = () => {
    // const [productList, setProductList] = useState([]);
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    const getProducts = () => {
        let searchQuery = query.get('q') || '';
        dispatch(fetchProducts(searchQuery));
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <Container>
                <Row className="main-row">
                    {productList.map((item, index) => (
                        <Col key={index} md={3} sm={4} xs={12}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
