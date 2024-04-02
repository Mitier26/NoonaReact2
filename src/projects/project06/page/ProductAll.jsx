import React, { useEffect, useState } from 'react';
import '../css/brandPage.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    // const [productList, setProductList] = useState([]);
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    async function getProducts() {
        let searchQuery = query.get('q') || '';
        // let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products?q=${searchQuery}`;
        // let response = await fetch(url);
        // let data = await response.json();
        // setProductList(data);
        dispatch(productAction.getProducts(searchQuery));
    }

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
