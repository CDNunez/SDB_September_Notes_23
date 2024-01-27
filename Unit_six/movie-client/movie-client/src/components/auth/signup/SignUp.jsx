import React, {useState, useRef} from 'react'
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function SignUp({updateToken}) {

  /* 
    ! useRef
        - is a hook
        - values consist and don't cause re-renders of the page.
        - returns only one item
            - an object called "current"
        - must be imported in with 'react'
        
        import { useRef } from 'react'
        
    */

  //const [ firstName, setFirstName ] = useState('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    // console.log('First Name', firstNameRef.current.value)

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(firstName)

    let bodyObj = JSON.stringify({
      first: firstName, last: lastName, email, password
    })

    // console.log(bodyObj);
    const url = `http://localhost:4000/user/signup`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //*setting headers to accept JSON object within the browser

    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST'
    }

    try {
       const response = await fetch(url, requestOptions);
       const data = await response.json();
       console.log(data);

       if(data.message === "Success!! User Created!") {
        updateToken(data.token)
        navigate('/movie')
       } else {
        alert(data.message)
       }

      updateToken(data.token);
    } catch (err) {
      console.error(err.message);
    }

  }

  return (
    <React.Fragment>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First</Label>
          <Input
          innerRef={firstNameRef}
          autoComplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last</Label>
          <Input
          innerRef={lastNameRef}
          autoComplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
          innerRef={emailRef}
          type='email'
          autoComplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
          innerRef={passwordRef}
          type="password"
          autoComplete={'off'}
          />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </React.Fragment>
  )
}

export default SignUp