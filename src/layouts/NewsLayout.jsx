import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <>
        <Header></Header>
        <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>

                </Col>
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </>
    );
};

export default NewsLayout;