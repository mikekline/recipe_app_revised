import {Link} from 'react-router-dom';


function RegLink() {
  return <p> Don't have an account?  
            <Link to='/Reg'>{" "}Register</Link>
          </p>         
}

export default RegLink;