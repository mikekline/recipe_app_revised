import {Form, FormGroup, Container} from 'react-bootstrap';
import {useState} from 'react';
import LoginHeader from '../../atoms/headers/LoginHeader';
import UsernameLabel from '../../atoms/labels/UsernameLabel';
import UsernameInput from '../../atoms/inputs/UsernameInput';
import PasswordLabel from '../../atoms/labels/PasswordLabel';
import PasswordInput from '../../atoms/inputs/PasswordInput';
import LoginButton from '../../atoms/buttons/login/LoginButton';
import RegLink from '../../atoms/links/RegLink';
import './styles.css';


function LoginForm(props) {

  return <Container fluid className='form'>
          <LoginHeader />
          <Form onSubmit={props.HandleSubmit}>
            <FormGroup className="mb-3" controlId="formBasicUsername">
              <UsernameLabel />
              <UsernameInput setName={props.GetUsername}/>
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicPassword">
              <PasswordLabel />
              <PasswordInput setPassword={props.GetPassword}/>
            </FormGroup>
            <LoginButton />
          </Form>
          <RegLink />
        </Container> 
}

export default LoginForm;