import {Link, Route, Router, Routes} from 'react-router-dom';
import RegisterForm from '../../molecules/forms/RegisterForm';


function RegLink() {
  return <p> Don't have an account?  
    
          <Link className='' to='/Reg'> Signup</Link>
          <Routes> <Route path="/Reg" component={RegisterForm} />
          </Routes></p>

}

export default RegLink;