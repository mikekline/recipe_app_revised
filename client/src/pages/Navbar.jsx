import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>  
      <nav className='navbar'>
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
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar