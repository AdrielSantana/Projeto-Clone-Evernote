import React, { Fragment } from 'react'

import Header from '../../../components/header_auth';
import Footer from '../../../components/footer';
import LoginForm from '../../../components/auth/login_form';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const LoginScreen = () => {
    return (
        <Fragment>

            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                
                <Col className='align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>
                    <LoginForm />
                </Col>

                <Col className='align-self-end'>
                    <Footer />
                </Col>

            </Row>

        </Fragment>
    )
}

export default LoginScreen