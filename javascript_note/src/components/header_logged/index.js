import React, { Fragment, useState } from 'react';
import '../../assets/styles/header_auth.scss'

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'

import { Link, useNavigate } from 'react-router-dom'

import UsersService from '../../services/users';

import logoImage from '../../assets/images/logo.svg'
import userIcon from '../../assets/images/user-icon.svg'


function HeaderLogged() {
    const navigate = useNavigate()

    const [redirectToHome, setRedirectToHome] = useState(false)
    const [redirectToUsersEdit, setRedirectToUsersEdit] = useState(false)

    const logOut = async () => {
        await UsersService.logout()
        setRedirectToHome(true)
    }

    const navigateUsersEdit = () => {
        setRedirectToUsersEdit(true)
    }

    if (redirectToHome) {
        navigate('/')
    }
    
    if (redirectToUsersEdit) {
        navigate('/users/edit')
    }

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

                    <span>
                        <Dropdown as={ButtonGroup}>
                            <span className='d-flex align-items-center'>
                                <img className='userIcon' src={userIcon} alt='User Icon' />
                                <p className='font-1 user-text color-white'>
                                    Fulano
                                </p>
                            </span>

                            <Dropdown.Toggle split variant="custom-orange-darker" id="dropdown-split-basic" />

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href='#' onClick={e => navigateUsersEdit()}>
                                        <p className='text-nomargin nunito font-1 color-white'>Acessar perfil</p>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='#' onClick={e => logOut()} >
                                    <p className='text-nomargin nunito font-1 color-white'>
                                        Sair da conta
                                    </p></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                </Nav>
            </Container>
        </Fragment>
    )
}

export default HeaderLogged