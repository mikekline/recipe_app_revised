import Form from 'react-bootstrap/Form';

function PasswordInput(props) {
  return <>
          <Form.Control 
            onChange={props.setName} 
            type="text" 
            placeholder="Enter Username" 
            required
          />
          <Form.Control.Feedback type="invalid">
            Required
          </Form.Control.Feedback>
        </>
}

export default PasswordInput;