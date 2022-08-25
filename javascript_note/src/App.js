import React, { Fragment } from 'react'
import './App.scss';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const App = () => {
  return (
    <Fragment>
      <Container>
        <Button variant='custom-purple'>Botão roxo customizado</Button>
      </Container>
    </Fragment>
  )
}

export default App;
