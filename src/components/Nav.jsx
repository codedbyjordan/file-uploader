import React from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Nav = () => {

  const [user, signIn, signOut] = useUser()

  return (
    <nav>
      <NavLink className="nav-link" to="/"><h1 className="logo">Jordan's File Uploader</h1></NavLink>
      <div className="nav-items">
      {!user.loggedIn && 
        <>
          <NavLink className="nav-link" to="/file-uploader/login">Login</NavLink>
          <NavLink className="nav-link" to="/file-uploader/signup">Signup</NavLink>
        </>
      }

      {user.loggedIn &&
        <NavLink className="nav-link" to="/file-uploader" onClick={signOut}>Sign Out</NavLink>
      }
      </div>
    </nav>
  );
}

export default Nav;
