import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

const Error = () => {
  const [cookies, getCookies, removeCookie] = useCookies([]);
  const signedIn = cookies? '/Recipe_app' : "/Recipe_app/login"

  return (
    <section>
        <h1>404</h1>
        <p>page not found</p>
        <Link to={signedIn}>Back home</Link>
    </section>
  )
}

export default Error