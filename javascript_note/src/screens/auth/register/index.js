import React, { Fragment } from 'react'

import Header from '../../../components/header_auth';
import Footer from '../../../components/footer';
import RegisterForm from '../../../components/auth/register_form'

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const RegisterScreen = () => {
    return (
        <Fragment>

            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                
                <Col className='align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>
                    <RegisterForm />
                </Col>

                <Col className='align-self-end'>
                    <Footer />
                </Col>
            </Row>

        </Fragment>
    )
}

export default RegisterScreen