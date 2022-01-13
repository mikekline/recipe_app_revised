import {Link} from 'react-router-dom';


function LoginLink() {
  return <p>Already have an acount? 
         <Link className='' to='/RegLink'> Login</Link>
        </p>

}

export default LoginLink;