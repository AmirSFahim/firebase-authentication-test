import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";



const Header = () => {


  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('logout'))
      .catch(error => {
        console.error(error)
      }

      )
  }
  const links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/login'}>Login</Link></li>
    <li><Link to={'/register'}>Register</Link></li>
    {
      user && <> 
      <li><Link to={'/orders'}>Orders</Link></li>
      <li><Link to={'/profile'}>Profile</Link></li> </>
    }
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Firebase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ? <>
              <p>{user.email}</p>
              <a onClick={handleLogOut} className="btn">sign out</a>
            </> :
            <NavLink to={'/login'}><button className="btn"> Log in</button></NavLink>
    }


        </div>
      </div>
    </div>
  );
};

export default Header;