import React, { Fragment, useState } from 'react';

import '../../../assets/styles/form.scss'

import UsersService from '../../../services/users';

import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const PasswordForm = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [status, setStatus] = useState(null)

    const [validated, setValidated] = useState(false);

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
                const user = await UsersService.updatePassword({
                    password: password
                })
                setStatus('success')
            } catch (error) {
                setStatus('error')
            }
        }
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
                            <p className='text-center font-2 nunito'>Alterar senha</p>
                        </Col>
                    </Row>

                    <Form noValidate validated={validated} onSubmit={HandleSubmit} className='nunito'>

                        <Row>
                            <Col xs={12}>
                                <Form.Group className="font-1-5 mb-3" controlId="formChangePassword">
                                    <Form.Label>Nova senha</Form.Label>
                                    <Form.Control className='card-input' type="password" placeholder="" required value={password} onChange={e => setPassword(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Precisa ter uma senha
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <Form.Group className="font-1-5 mb-3" controlId="formChangeConfirmPassword">
                                    <Form.Label>Confirmar senha</Form.Label>
                                    <Form.Control className='card-input' type="password" placeholder="" required value={confirmPassword} onChange={e => { setConfirmPassword(e.target.value); differentPassword(e.target.value) }} />
                                    <Form.Control.Feedback type="invalid">
                                        Precisa confirmar a senha
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
                                    Alterar
                                </Button>
                            </Col>

                            <Col xs={12}>
                                {(status === 'success') &&
                                    (<p className="font-1-5 text-center mt-3 text-success">
                                        Alterado com sucesso
                                    </p>)}
                                {(status === 'error') &&
                                    (<p className="font-1-5 text-center mt-3 text-danger">
                                        Erro ao alterar
                                    </p>)}
                            </Col>

                        </Row>

                    </Form>
                </div>
            </Container>
        </Fragment>
    )
}

export default PasswordForm