import React, { Fragment } from 'react'
import '../../assets/styles/home_screen.scss';

import Header from '../../components/header_home';
import Footer from '../../components/footer';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

import devicesImage from '../../assets/images/devices.png'
import divisorImage from '../../assets/images/divisor.svg'


const HomeScreen = () => {
    return (
        <Fragment>

            <Row className='purple-gradient-bg main-container d-flex' xs={1}>
                <Col className='header align-self-start'>
                    <Header />
                </Col>

                <Col className='align-self-center'>
                    <Container>
                        <Row>

                        <Col className='d-flex'>
                                <Container className='d-flex align-self-center text-body flex-column'>
                                    <p className='home-text color-white font-2-5 courgette text-nowrap'>
                                        Crie notas facilmente
                                    </p>
                                    <p className='home-title color-white font-2-5 courgette'>
                                        e tenha acesso quando quiser
                                    </p>

                                    <img alt='divisor' className='divisor-img' src={divisorImage} />

                                    <p className='font-2 color-white nunito'>
                                        Crie, edite e transforme notas como quiser e de onde estiver com o aplicativo
                                        <span className='nunito-italic-bold color-orange'> Tomenote</span>.
                                        O conforto de anotar suas pendências de forma organizada e prática.
                                    </p>
                                    <Container className='d-flex justify-content-center'>
                                        <Button className='font-2 justify-self-center text-nowrap orange-gradient-bg register-button-home nunito'>
                                            Registre-se grátis agora
                                        </Button>
                                    </Container>

                                </Container>
                            </Col>


                            <Col className='device-col d-flex align-items-center'>
                                <Container className='d-flex align-items-center justify-content-center'>
                                    <img alt='devices' className='devices-img' src={devicesImage} />
                                </Container>
                            </Col>

                        </Row>
                    </Container>
                </Col>

                <Col className='align-self-end'>
                    <Footer />
                </Col>
            </Row>

        </Fragment>
    )
}

export default HomeScreen