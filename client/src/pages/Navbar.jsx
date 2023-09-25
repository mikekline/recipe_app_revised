import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useCookieContext } from './auth/Auth';

const Navbar = () => {
  const { user, setUser } = useCookieContext()
  const [cookies, getCookies, removeCookie] = useCookies(['token']);
  const navigateTo = useNavigate();


  if (!cookies.token){
    return (<></>);
  }


  const Logout = () => {
    const {username, email} = '';
    setUser({username, email});
    removeCookie('token', {path:'/Recipe_app'});
    navigateTo("/Recipe_app/login");
  };
  

  return (
    <>  
      <nav className='navbar'>
        <div className='linkContainer'>
        <NavLink 
          to='/Recipe_app/' 
          className={({isActive})=>isActive?'link active': 'link'} 
        >
          Recipes
        </NavLink>
        <NavLink 
          to='/Recipe_app/addRecipe' 
          className={({isActive})=>isActive?'link active': 'link'}
        >
          Add a Recipe
        </NavLink>
        <NavLink 
          to='/Recipe_app/deleteRecipe' 
          className={({isActive})=>isActive?'link active': 'link'}
        >
          Delete Recipes
        </NavLink>
        
        </div>
        <div className='welcome'>  {`Welcome Chef: ${user && user.username}`}<button className='logOutBtn' onClick={ Logout }>Logout</button></div>
        
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar