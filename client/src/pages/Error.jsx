import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
        <h1>404</h1>
        <p>page not found</p>
        <Link to='/Recipe_app/'>Back home</Link>
    </section>
  )
}

export default Error