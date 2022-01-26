import {useState} from 'react';
import RegisterForm from '../molecules/forms/RegisterForm';
import axios from 'axios';
require('dotenv').config();
const registerUrl = process.env.REACT_APP_REGISTERURL; 

function LoginFormComplete(props) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  

  function GetUsername(e){    
    setusername(e.target.value);
   };

   function GetPassword(e){    
    setPassword(e.target.value);
  };



   function HandleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const registerData = {
      username: username,
      password: password
    }
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
      setValidated(true);


    axios.post(registerUrl, registerData)
      .then(response => {
        console.log("Status: ", response.status);
      }).catch(error => {
        console.error('Did not save data!', error);
      });
  };

  

  return <RegisterForm
            PropValidated={validated} 
            GetUsername={GetUsername} 
            GetPassword={GetPassword} 
            HandleSubmit={HandleSubmit}
          /> 
}

export default LoginFormComplete;