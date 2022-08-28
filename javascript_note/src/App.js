import React, { Fragment } from 'react'
import './App.scss';

import Header from './components/header';

import Container from 'react-bootstrap/esm/Container';

const App = () => {
  return (
    <Fragment>
      <Container className='purple-gradient-bg main-container' fluid>
      <Header/>
      </Container>
    </Fragment>
  )
}

export default App;
