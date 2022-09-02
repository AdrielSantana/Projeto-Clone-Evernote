import React, { Fragment, useEffect, useState } from 'react';

import '../../../assets/styles/form.scss'

import UsersService from '../../../services/users';

import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const ProfileForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState(null)

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const [validated, setValidated] = useState(false);

    const HandleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        try {
            // eslint-disable-next-line
            await UsersService.update({ name: name, email: email })
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
    }



    return (
        <Fragment>
            <Container className='d-flex justify-content-center'>
                <div className='mb-0 orange-gradient-bg principal-card'>
                    <Row>
                        <Col>
                            <p className='text-center font-2 nunito'>Seu perfil</p>
                        </Col>
                    </Row>

                    <Form noValidate validated={validated} onSubmit={HandleSubmit} className='nunito'>

                        <Row>
                            <Col xs={12}>
                                <Form.Group className="font-1-5 mb-3" controlId="formChangeName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control className='card-input' type="text" placeholder="" required value={name} onChange={e => setName(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Precisa ter um nome
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <Form.Group className="font-1-5 mb-3" controlId="formChangeEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className='card-input' type="email" placeholder="" required value={email} onChange={e => setEmail(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Precisa ter um email
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='d-flex wrap confirm-row'>

                            <Col xs='auto'>
                                <Button className='font-1-5 purple-gradient-bg color-orange confirm-button' type="submit">
                                    Atualizar
                                </Button>
                            </Col>

                            <Col xs={12}>
                                {(status === 'success') &&
                                    (<p className="font-1-5 text-center mt-3 text-success">
                                        Atualizado com sucesso
                                    </p>)}
                                {(status === 'error') &&
                                    (<p className="font-1-5 text-center mt-3 text-danger">
                                        Erro ao atualizar
                                    </p>)}
                            </Col>

                        </Row>

                    </Form>
                </div>
            </Container>
        </Fragment>
    )
}

export default ProfileForm