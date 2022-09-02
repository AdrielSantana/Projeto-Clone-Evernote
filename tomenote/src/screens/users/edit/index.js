import React, { Fragment } from 'react'

import Header from '../../../components/header_logged';
import ProfileForm from '../../../components/user/profile_form';
import PasswordForm from '../../../components/user/password_form';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const UsersEditScreen = () => {
    return (
        <Fragment>
            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                <Col className='align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>
                    <ProfileForm />
                </Col>

                <Col className='align-self-center'>
                    <PasswordForm />
                </Col>
            </Row>
        </Fragment>
    )
}

export default UsersEditScreen