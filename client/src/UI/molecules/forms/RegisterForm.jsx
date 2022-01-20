import {Form, FormGroup, Container} from 'react-bootstrap';
import RegisterHeader from '../../atoms/headers/RegisterHeader';
import UsernameLabel from '../../atoms/labels/UsernameLabel';
import UsernameInput from '../../atoms/inputs/UsernameInput';
import PasswordLabel from '../../atoms/labels/PasswordLabel';
import PasswordInput from '../../atoms/inputs/PasswordInput';
import RegisterButton from '../../atoms/buttons/register/RegisterButton';
import LoginLink from '../../atoms/links/LoginLink';
import './styles.css';


function RegisterForm(props) {
  return <Container fluid className='form'>
          <RegisterHeader />
          <Form noValidate validated={props.PropValidated} onSubmit={props.HandleSubmit}>
            <FormGroup className="mb-3" controlId="formBasicUsername">
              <UsernameLabel />
              <UsernameInput setName={props.GetUsername} />
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicPassword">
              <PasswordLabel />
              <PasswordInput setPassword={props.GetPassword} />
            </FormGroup>
            <RegisterButton />
            <LoginLink />
          </Form>
        </Container> 
}

export default RegisterForm;