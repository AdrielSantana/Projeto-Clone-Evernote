import React, { useState, Fragment } from "react";

//import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { push as Menu } from 'react-burger-menu'

import sideBarIconRight from '../../assets/images/slide-side-bar-right.svg'
import sideBarIconLeft from '../../assets/images/slide-side-bar-left.svg'

import '../../assets/styles/notes.scss'
import Container from "react-bootstrap/esm/Container";

const Notes = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>

            <Row className="m-0">
                <div className="menu-div">
                    <Menu
                        pageWrapId={"notes-editor"}
                        isOpen={isOpen}
                        onStateChange={(state) => setIsOpen(state.isOpen)}
                        disableAutoFocus
                        customBurgerIcon={false}
                        customCrossIcon={false}
                    >


                        {<Container className="d-flex justify-content-center">
                            <Row className="nunito color-white">
                                <Col xs={12}>
                                    <p>Search...</p>
                                </Col>
                                <Col xs={12}>
                                    <p>List...</p>
                                </Col>
                            </Row>
                        </Container>}
                    </Menu>
                </div>

                <Col xs={12} className='p-0 notes-editor' id="notes-editor">
                    {
                        isOpen && <Button onClick={() => setIsOpen(true)} className="button-sider-bar" variant="none">
                            <img alt="Slide Icon" className="side-bar" src={sideBarIconLeft} />
                        </Button>
                    }
                    {
                        !isOpen && <Button onClick={() => setIsOpen(true)} className="button-sider-bar" variant="none">
                            <img alt="Slide Icon" className="side-bar" src={sideBarIconRight} />
                        </Button>
                    }
                    Editor bar
                </Col>
            </Row>

        </Fragment >
    )
}

export default Notes