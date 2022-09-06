import React, { Fragment, useState } from 'react'

import Header from '../../../components/header_logged';
import Notes from '../../../components/notes';
import ScrollToTop from '../../../components/scroll_to_top_button';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleSetIsOpen = () => {
        if (isOpen){
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <Fragment>
            <ScrollToTop />
            <Row className='main-container d-flex' xs={1}>
                <Col className='d-flex flex-column align-self-start'>

                    <div className='sticky-top purple-gradient-bg header-notes'>
                        <Header 
                        isOpen={isOpen}
                        />
                    </div>

                    <Row className='notes'>
                        <Col>
                            <Notes 
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            toogleSetIsOpen={toogleSetIsOpen}
                            />
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Fragment>
    )
}

export default NotesScreen