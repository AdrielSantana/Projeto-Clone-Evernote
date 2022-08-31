import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../assets/styles/header.scss'

import { Link } from 'react-router-dom'

import hamburguer from '../../assets/images/hamburguer.svg'
import logoImage from '../../assets/images/logo.svg'

function HeaderHome() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Fragment>
            <Container>
                <Nav className="justify-content-between align-items-center">

                    <span className='d-flex align-items-center'>
                        <Nav.Item>
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

                    <Offcanvas placement='end' show={show} onHide={handleClose} responsive="md">
                        <Offcanvas.Header closeButton closeVariant='white'>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <span className='d-flex justify-content-center align-items-center'>
                                <Nav.Item>
                                    <Link to='/login' className='cta brand-title'>
                                        <span className="nunito hover-underline-animation">
                                            Entrar
                                        </span>
                                    </Link>
                                </Nav.Item>
                            </span>
                            <span className='d-flex justify-content-center align-items-center'>
                                <Nav.Item>
                                    <Link to='/register'>
                                        <Button className='orange-gradient-bg register-button nunito-bold'>
                                            Registrar
                                        </Button>
                                    </Link>
                                </Nav.Item>
                            </span>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Button variant="link" className="d-md-none hamburguer-button" onClick={handleShow}>
                        <img alt='hamburguer' className='hamburguer' src={hamburguer}></img>
                    </Button>
                </Nav>
            </Container>
        </Fragment>
    )
}

export default HeaderHome