
import {useState} from 'react';
import RegisterForm from '../molecules/forms/RegisterForm';
import axios from 'axios';
require('dotenv').config();
const registerUrl = process.env.REACT_APP_REGISTERURL; 

function LoginFormComplete() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  

  function GetUsername(e){    
     setusername(e.target.value);
    
   };

   function GetPassword(e){    
    setPassword(e.target.value);
   
  };

   function HandleSubmit(e){
    e.preventDefault();
    
    const registerData = {
      username: username,
      password: password
    }

    axios.post(registerUrl, registerData)
      .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.registerData);
      }).catch(error => {
        console.error('Did not save data!', error);
      });
  };

  return <RegisterForm
            GetUsername={GetUsername} 
            GetPassword={GetPassword} 
            HandleSubmit={HandleSubmit}
          /> 
}

export default LoginFormComplete;