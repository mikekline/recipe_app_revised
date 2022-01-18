import {Link} from 'react-router-dom';


function LoginLink() {
  return <p>Already have an acount? 
          <Link to='/'>{" "}Login</Link>
        </p>
}

export default LoginLink;

