import React, { Fragment } from 'react'
import '../../../assets/styles/login_screen.scss';

import Header from '../../../components/header_auth';
import Footer from '../../../components/footer';

import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form'

const LoginScreen = () => {
    return (
        <Fragment>

            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                <Col className='align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>
                    <Container className='d-flex justify-content-center'>
                        <div className='orange-gradient-bg principal-card'>                 
                                <Row>
                                    <Col>
                                        <p className='text-center font-2 nunito'>Entre na sua conta</p>
                                    </Col>
                                </Row>

                                <Form className='nunito'>

                                    <Row>
                                        <Col xs={12}>
                                            <Form.Group className="font-1-5 mb-3" controlId="formBasicName">
                                                <Form.Label>Nome</Form.Label>
                                                <Form.Control className='card-input' type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12}>
                                            <Form.Group className="font-1-5 mb-3" controlId="formBasicPassword">
                                                <Form.Label>Senha</Form.Label>
                                                <Form.Control className='card-input' type="password" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className='d-flex wrap confirm-row'>

                                        <Col xs='auto'>
                                            <Button className='font-1-5 purple-gradient-bg color-orange confirm-button' type="submit">
                                                Entrar
                                            </Button>
                                        </Col>

                                        <Col className='d-flex text-center text-nowrap justify-content-center'>
                                            <p className='font-1-5 text-card align-self-center'>
                                                Não possui uma conta? Clique <Link to='/register' className='color-purple link-aqui nunito-italic-bold'>
                                                    Aqui
                                                </Link>
                                            </p>
                                        </Col>

                                    </Row>

                                </Form>
                        </div>
                    </Container>
                </Col>

                <Col className='align-self-end'>
                    <Footer />
                </Col>
            </Row>

        </Fragment>
    )
}

export default LoginScreen