import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppLayout.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
// outlet: 라우터 안에 있는 자손들을 가지고 오게 한다.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const AppLayout = () => {
    let navigate = useNavigate();

    return (
        <div>
            <Navbar expand="lg" id="netflix-navbar" className="bg-body-tertiary ">
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png"
                            width={'80px'}
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="netflix-nav-item" onClick={() => navigate('/netflix')}>
                                Home
                            </Nav.Link>
                            <Nav.Link className="netflix-nav-item" onClick={() => navigate('/netflix/movies')}>
                                Movies
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-danger">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default AppLayout;
