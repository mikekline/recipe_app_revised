import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import RegisterHeader from '../../atoms/headers/RegisterHeader';
import UsernameLabel from '../../atoms/labels/UsernameLabel';
import UsernameInput from '../../atoms/inputs/UsernameInput';
import PasswordLabel from '../../atoms/labels/PasswordLabel';
import PasswordInput from '../../atoms/inputs/PasswordInput';
import RegisterButton from '../../atoms/buttons/register/RegisterButton';
import './styles.css';


function LoginForm() {
  return <Container className='test1'>
<Row><Col>
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
    </Form>
    </Col></Row>
  </Container> 
}

export default LoginForm;