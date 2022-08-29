import React, { Fragment } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import '../../assets/styles/header_auth.scss'

import { Link } from 'react-router-dom'

import logoImage from '../../assets/images/logo.svg'

function HeaderAuth() {
    return (
        <Fragment>
            <Container>
                <Nav className="justify-content-between align-items-center">
                    <span className='d-flex'>
                        <Nav.Item className='align-items-center'>
                            <Link to='/'>
                                <img src={logoImage} className='brand' alt='logo'>
                                </img>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/' className='font-3 courgette brand-title'>
                                Tomenote
                            </Link>
                        </Nav.Item>
                    </span>
                </Nav>
            </Container>
        </Fragment>
    )
}

export default HeaderAuth