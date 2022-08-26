import React, { Fragment } from 'react'
import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <Fragment>
      <Container>
        <Row className='text-center'>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
          <Col className='test' lg={{ span: 1, offset: 0 }}>lg</Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App;
