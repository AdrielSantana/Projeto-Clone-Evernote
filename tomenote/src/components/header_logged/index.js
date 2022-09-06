import React, { Fragment, useState } from 'react';
import '../../assets/styles/header_auth.scss'

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link, Navigate } from 'react-router-dom'

import UsersService from '../../services/users';

import logoImage from '../../assets/images/logo.svg'
import userIcon from '../../assets/images/user-icon.svg'
import hamburguer from '../../assets/images/hamburguer.svg'


function HeaderLogged(props) {

    const [redirectToHome, setRedirectToHome] = useState(false)
    const [redirectToUsersEdit, setRedirectToUsersEdit] = useState(false)

    const logOut = async () => {
        await UsersService.logout()
        setRedirectToHome(true)
    }

    const navigateUsersEdit = () => {
        setRedirectToUsersEdit(true)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (redirectToHome) {
        return <Navigate to='/' />
    }

    if (redirectToUsersEdit) {
        return <Navigate to='/users/edit' />
    }

    const user = JSON.parse(localStorage.getItem('user'))

    const userName = (name) => {
        let emptySpace = name.indexOf(' ')

        let lastEmptySpace = name.lastIndexOf(' ')

        if (emptySpace === -1 || lastEmptySpace === -1) {
            return name
        }

        let firstName = name.slice(0, emptySpace)

        let lastName = name.slice(lastEmptySpace, name.length)

        return firstName + ' ' + lastName
    }

    return (
        <Fragment>
            <Container>
                <Nav className="justify-content-between align-items-center">
                    <span className='d-flex align-items-center'>
                        <Nav.Item>
                            <Link to='/notes'>
                                <img src={logoImage} className='brand' alt='logo'>
                                </img>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/notes' className='font-3 courgette brand-title'>
                                Tomenote
                            </Link>
                        </Nav.Item>
                    </span>

                    <Offcanvas placement='end' show={show} onHide={handleClose} responsive="md">
                        <Offcanvas.Header closeButton closeVariant='white'>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <span className='d-flex justify-content-center align-items-center'>
                                <Dropdown as={ButtonGroup}>
                                    <span className='d-flex align-items-center'>
                                        <img className='userIcon' src={userIcon} alt='User Icon' />
                                        <p className='user-text color-white'>
                                            {userName(user.name)}
                                        </p>
                                    </span>

                                    <Dropdown.Toggle className='dropdown-icon' split variant="secondary" id="dropdown-split-basic" />

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href='#' onClick={e => navigateUsersEdit()}>
                                            <p className='text-nomargin nunito color-white'>Acessar perfil</p>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href='#' onClick={e => logOut()} >
                                            <p className='text-nomargin nunito color-white'>
                                                Sair da conta
                                            </p></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Button variant="link" className="d-md-none hamburguer-button" onClick={!props.isOpen ? handleShow : ''}>
                        <img alt='hamburguer' className='hamburguer' src={hamburguer}></img>
                    </Button>

                </Nav>
            </Container>
        </Fragment>
    )
}

export default HeaderLogged