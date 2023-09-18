import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
//!TODO fix  this error page  for  if you are logged in or not
const Error = () => {
  const navigateTo = useNavigate();

const [cookies, getCookies, removeCookie] = useCookies([]);
console.log(cookies)
  const handleClick = () => {
 return cookies
        ? navigateTo("/Recipe_app")
        : (removeCookie("token"), navigateTo("/Recipe_app/login"));
  }

  const signedIn = cookies? '/Recipe_app' : "/Recipe_app/login"


 

  return (
    <section>
        <h1>404</h1>
        <p>page not found</p>
        <Link to={signedIn}>Back home</Link>
            <button type="button" onClick={handleClick}>
      Back home
    </button>
    </section>
  )
}

export default Error