import Form from 'react-bootstrap/Form';


function PasswordInput(props) {
  return <Form.Control onChange={props.setPassword} type="password" placeholder="Enter Password" />
}

export default PasswordInput;