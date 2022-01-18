import Form from 'react-bootstrap/Form';

function PasswordInput(props) {
  return <Form.Control onChange={props.setName} type="text" placeholder="Enter Username" />
}

export default PasswordInput;