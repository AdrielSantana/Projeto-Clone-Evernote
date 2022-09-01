import React, { Fragment } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import '../../assets/styles/footer.scss'

function Footer() {
    return (
        <Fragment>
            <div className="footer footer-bg">
                <Container className="footer-height d-flex justify-content-center flex-column">
                    <Row>
                        <Container className="d-flex flex-nowrap justify-content-between align-items-center">
                            <Col className="footer-col text-start">
                                <p className="font-1 nunito">
                                    Tomenote 2022 © Todos direitos reservados
                                </p>
                            </Col>

                            <Col className="nunito text-end font-1 footer-col text-nowrap">
                                <p>
                                    Powered by <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/adrielsan/" className="color-orange owner nunito-italic-bold">Adriel Santana</a>
                                </p>
                            </Col>
                        </Container>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default Footer