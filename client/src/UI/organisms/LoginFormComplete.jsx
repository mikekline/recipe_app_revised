
import {useState} from 'react';
import LoginForm from '../molecules/forms/LoginForm';
import axios from 'axios';
require('dotenv').config();
const loginUrl = process.env.REACT_APP_LOGINURL; 

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
    
    const loginData = {
      username: username,
      password: password
    }

    axios.post(loginUrl, loginData)
      .then(response => {
        console.log(response.status);
        console.log(response.loginData);
      }).catch(error => {
        console.error('Can not find login data!', error);
      });
  };

  return <LoginForm 
            GetUsername={GetUsername} 
            GetPassword={GetPassword} 
            HandleSubmit={HandleSubmit}
          /> 
}

export default LoginFormComplete;