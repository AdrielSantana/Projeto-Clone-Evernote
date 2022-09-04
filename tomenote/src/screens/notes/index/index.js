import React, { Fragment } from 'react'

import Header from '../../../components/header_logged';
import Notes from '../../../components/notes';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NotesScreen = () => {


    return (
        <Fragment>

            <Row className='main-container d-flex' xs={1}>

                <Col className='d-flex flex-column align-self-start'>

                    <div className='sticky-top purple-gradient-bg header-notes'>
                        <Header />
                    </div>

                    <Row className='overflow-hidden notes'>
                        <Col>
                            <Notes />
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Fragment>
    )
}

export default NotesScreen