import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useCookieContext } from './auth/Auth';
//! navbar still loading once user is  logged out
const Navbar = () => {
  const { user, setUser, Logout } = useCookieContext()
  const [cookies, getCookies, removeCookie] = useCookies(['token']);
const navigateTo = useNavigate();
  if (JSON.stringify(cookies) === '{}'){
    return (<></>);
  }

    const Logout2 = () => {
    //!todo still not removing token, in some way
    //!todo set user to null
    //scratch that it works if  path is correct
    const {username, email} = '';
    removeCookie('token', {path:'/Recipe_app'});
    setUser({username, email});
    navigateTo("/Recipe_app/login");
    console.log(cookies.token)
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
        <div className='welcome'>  {`Welcome Chef: ${user.username}`}<button className='logOutBtn' onClick={ Logout2 }>Logout</button></div>
        
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar