import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>  
      <nav className='navbar'>
        <NavLink 
          to='/' 
          className={({isActive})=>isActive?'link active': 'link'} 
        >
          Recipes
        </NavLink>
        <NavLink 
          to='/addRecipe' 
          className={({isActive})=>isActive?'link active': 'link'}
        >
          Add a Recipe
        </NavLink>
        <NavLink 
          to='/deleteRecipe' 
          className={({isActive})=>isActive?'link active': 'link'}
        >
          Delete Recipes
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar