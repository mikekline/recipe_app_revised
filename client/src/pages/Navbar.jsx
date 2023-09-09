import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useCookieContext } from './auth/Auth';

const Navbar = () => {
  const navigateTo = useNavigate();
  const {  user, Logout } = useCookieContext()

  // const Logout = () => {
  //   removeCookie("token");
  //   navigateTo("/Recipe_app/login");
  // };

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
        <div className='welcome'>  {`Welcome Chef: ${user.username}`}<button className='logOutBtn' onClick={ Logout }>Logout</button></div>
        
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar