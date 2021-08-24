import React, { useContext } from 'react';
import useUser from '../hooks/useUser';

const Title = () => {
  
  const [user, signIn, signOut] = useUser()

  
  return (
    <div className="title">
      <h1>Jordan's Image Uploader</h1>
      {!user.loggedIn && <button onClick={signIn}>Sign In</button>}
      {user.loggedIn && 
        <>
          <p>Hello, {user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
          <h2>Your Pictures</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </>
      }

      
    </div>
  )
}

export default Title;