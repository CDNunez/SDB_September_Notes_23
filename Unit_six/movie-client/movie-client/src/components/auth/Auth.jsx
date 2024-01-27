import React, {useState} from 'react'
import SignUp from './signup/SignUp'
import { Container, Row, Col, Button } from 'reactstrap';
import Login from '../login/Login';

function Auth(props) {

  const [ button, setButton] = useState('Signup');

  const swapForm=()=> {
    button === 'Login' ?
      setButton('Signup') :
      setButton('Login')
  }

  const displayForm = () => {
    return(
      button === 'Login' ?
        <Container>
        <Row>
          <Col md="6">
            <SignUp 
            updateToken={props.updateToken}
            />
         </Col>
        </Row>
        </Container> :
        <Container>
          <Row>
        <Col md="6">
          <Login 
            updateToken={props.updateToken}
          />
        </Col>
      </Row>
        </Container>
    )
  }

  return (
    <React.Fragment>
    <button onClick={swapForm}
    color='dark'>
    {button}
    </button>
    {displayForm()}
    </React.Fragment>
  )
}

export default Auth