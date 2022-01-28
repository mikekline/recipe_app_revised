import Cookies from 'js-cookie'
import {useState, useEffect} from 'react';
import LoginForm from '../molecules/forms/LoginForm';
import axios from 'axios';
require('dotenv').config();
const loginUrl = process.env.REACT_APP_LOGINURL; 

function LoginFormComplete() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);



  function GetUsername(e){    
     setusername(e.target.value);
    
   };

   function GetPassword(e){    
    setPassword(e.target.value);
   
  };

  useEffect(() => {
   console.log(document.cookie)
  });
  

   const HandleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      username: username,
      password: password
    }

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
      setValidated(true);

      
    axios.post(loginUrl, loginData)
      .then(response => {
        console.log(response.status);
        console.log(response.data);
      }).catch(error => {
        console.error('Can not find login data!', error);
      });
  };


  

  
  return <LoginForm
            PropValidated={validated} 
            GetUsername={GetUsername} 
            GetPassword={GetPassword} 
            HandleSubmit={HandleSubmit}
          /> 
}

export default LoginFormComplete;