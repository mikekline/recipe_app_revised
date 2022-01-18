
import {useState} from 'react';
import RegisterForm from '../molecules/forms/RegisterForm';


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
    console.log(username);
    console.log(password);
  };

  return <RegisterForm
            GetUsername={GetUsername} 
            GetPassword={GetPassword} 
            HandleSubmit={HandleSubmit}
          /> 
}

export default LoginFormComplete;