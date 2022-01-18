import {Form, FormGroup, Container} from 'react-bootstrap';
import RegisterHeader from '../../atoms/headers/RegisterHeader';
import UsernameLabel from '../../atoms/labels/UsernameLabel';
import UsernameInput from '../../atoms/inputs/UsernameInput';
import PasswordLabel from '../../atoms/labels/PasswordLabel';
import PasswordInput from '../../atoms/inputs/PasswordInput';
import RegisterButton from '../../atoms/buttons/register/RegisterButton';
import LoginLink from '../../atoms/links/LoginLink';
import './styles.css';


function RegisterForm() {
  return <Container className='form'>
          <RegisterHeader />
          <Form>
            <FormGroup className="mb-3" controlId="formBasicUsername">
              <UsernameLabel />
              <UsernameInput />
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicPassword">
              <PasswordLabel />
              <PasswordInput />
            </FormGroup>
            <RegisterButton />
            <LoginLink />
          </Form>
        </Container> 
}

export default RegisterForm;