import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function Login({updateToken}) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(emailRef);
        // console.log(passwordRef);

        const body = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        const url = 'http://localhost:4000/user/login';

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": 'application/json'
                }),
                body: body
            });

            const data = await res.json();
            console.log(data);

            updateToken(data.token);

            if(data.message === "Successful") {
                updateToken(data.token)
                navigate("/movie")
            } else {
                alert(data.message)
            }

        } catch (err) {
            console.error(err.message)
        }
    }

  return (
    <React.Fragment>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <Input
          placeholder='your@email.com'
          innerRef={emailRef}
          type='email'
          autoComplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
          placeholder='password'
          innerRef={passwordRef}
          type="password"
          autoComplete={'off'}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
        </Form>
    </React.Fragment>
  )
}

export default Login