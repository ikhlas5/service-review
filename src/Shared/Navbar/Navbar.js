import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UseContext/UseContext';
import {  Image } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
const Navbar = () => {
  
  const {user,logOut}=useContext(AuthContext);

  const handleLogout = () => {
    logOut()
        .then(() => { })
        .catch((error) => console.error(error))
}
    return (
        <div className="navbar bg-base-100 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li tabIndex={0}>
          <Link to="/Orders">Add Services</Link>
        </li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
        user?.email ?
        <>
           <li><Link to="/login">Login</Link></li>
        </>
           :
            <li><button onClick={handleLogout}>LogOut</button></li>
        
      }
        <li><Link to="/singup">SingUp</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">wedding photographer</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li tabIndex={0}>
        <Link to="/Orders">
          Add Services
        </Link>
      </li>
      <li><Link to="/blogs">Blogs</Link></li>
      {/* <li><Link to="/login">Login</Link></li> */}
      {
        user?.uid || user?.photoURL ?
        <>
           <li><Link to="/login">Login</Link></li>
        </>
           :
            <><button onClick={handleLogout}>LogOut</button></>
        
      }
      <li><Link to="/singup">SingUp</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="" className="btn">Get started</Link>
  </div>
</div>
    );
};

export default Navbar;