import React, { Fragment } from 'react'

import Header from '../../components/header_logged';
import Footer from '../../components/footer';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NotesScreen = () => {
    return (
        <Fragment>

            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                
                <Col className='align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>

                </Col>

                <Col className='align-self-end'>
                    <Footer />
                </Col>

            </Row>

        </Fragment>
    )
}

export default NotesScreen