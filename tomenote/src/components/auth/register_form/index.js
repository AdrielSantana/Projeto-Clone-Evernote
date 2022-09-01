import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import '../../../assets/styles/form.scss'

import UsersService from '../../../services/users';

import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const LoginForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [validated, setValidated] = useState(false);

    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const [error, setError] = useState(false)

    const HandleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        if ((password !== confirmPassword) || (!password)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            try {
                // eslint-disable-next-line
                const user = await UsersService.register({
                    name: name,
                    email: email,
                    password: password
                })
                setRedirectToLogin(true)
            } catch (error) {
                setError(true)
            }
        }
    }

    if (redirectToLogin) {
        return <Navigate to='/login' />
    }

    const differentPassword = (value) => {
        if ((password !== value) || (!password)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }

    return (
        <Fragment>
            <Container className='d-flex justify-content-center'>
                <div className='orange-gradient-bg principal-card'>
                    <Row>
                        <Col>
                            <p className='text-center font-2 nunito'>Crie a sua conta</p>
                        </Col>
                    </Row>

                    <Form noValidate validated={validated} onSubmit={HandleSubmit} className='nunito'>

                        <Row>
                            <Col xs={6}>
                                <Form.Group className="font-1-5 mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control className='card-input' type="name" required value={name} onChange={e => setName(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Coloque seu nome
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={6}>
                                <Form.Group className="font-1-5 mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className='card-input' type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Coloque seu email
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Form.Group className="font-1-5 mb-3" controlId="formPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control className='card-input' type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Coloque sua senha
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col xs={6}>
                                <Form.Group className="font-1-5 text-nowrap mb-3" controlId="formConfirmPassword">
                                    <Form.Label>Confirmar senha</Form.Label>
                                    <Form.Control className='card-input' type="password" required value={confirmPassword} onChange={e => { setConfirmPassword(e.target.value); differentPassword(e.target.value) }}/>
                                    <Form.Control.Feedback type="invalid">
                                        Confirme a senha
                                    </Form.Control.Feedback>
                                    {passwordError &&
                                        (<Form.Control.Feedback>
                                            <p className='text-danger'>Senha diferente</p>
                                        </Form.Control.Feedback>)}
                                </Form.Group>

                            </Col>
                        </Row>

                        <Row className='d-flex wrap confirm-row'>

                            <Col xs='auto'>
                                <Button className='font-1-5 purple-gradient-bg color-orange confirm-button' type="submit">
                                    Criar
                                </Button>
                            </Col>

                            <Col className='d-flex text-center text-nowrap justify-content-center'>
                                <p className='font-1-5 text-card align-self-center'>
                                    Já possui uma conta? Clique <Link to='/login' className='color-purple link-aqui nunito-italic-bold'>
                                        Aqui
                                    </Link>
                                </p>
                            </Col>

                            <Col xs={12}>
                                {error &&
                                    (<p className="font-1-5 text-center mt-3 text-danger">
                                        Email ou senha inválidos
                                    </p>)}
                            </Col>

                        </Row>

                    </Form>
                </div>
            </Container>
        </Fragment>
    )
}

export default LoginForm