import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import LoginHeader from '../../atoms/headers/LoginHeader';
import UsernameLabel from '../../atoms/labels/UsernameLabel';
import UsernameInput from '../../atoms/inputs/UsernameInput';
import PasswordLabel from '../../atoms/labels/PasswordLabel';
import PasswordInput from '../../atoms/inputs/PasswordInput';
import LoginButton from '../../atoms/buttons/login/LoginButton';
import './styles.css';


function LoginForm() {
  return <Container className='test1'>
<Row><Col>
    <LoginHeader />
    <Form>
      <FormGroup className="mb-3" controlId="formBasicUsername">
        <UsernameLabel />
        <UsernameInput />
      </FormGroup>

      <FormGroup className="mb-3" controlId="formBasicPassword">
        <PasswordLabel />
        <PasswordInput />
      </FormGroup>
      <LoginButton />
    </Form>
    </Col></Row>
  </Container> 
}

export default LoginForm;