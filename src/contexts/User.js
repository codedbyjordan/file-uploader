import React, { useEffect, useReducer } from 'react';
import { firebaseAuth } from '../firebase/firebaseFunctions';

let initialUserState = {loading: true}

const userReducer = (state, action) => {
  switch(action.type) {
    case 'sign_in':
      return {
        loggedIn: true,
        displayName: action.payload.displayName,
        email: action.payload.email,
        id: action.payload.id
      }
    case 
      'sign_out',
      'reset':
      return {
        loggedIn: false,
      }
    default:
      return state
  }
}

const UserContext = React.createContext();

const UserProvider = (props) => {

  const [user, userDispatch] = useReducer(userReducer, initialUserState)

  // initial auth check
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        userDispatch({
          type: 'sign_in',
          payload: {
            displayName: user.displayName,
            email: user.email,
            id: user.uid
          }
        })
      } else {
        userDispatch({type: 'reset'})
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{user, userDispatch}}>
      {user.loading ? <div className="loading"></div> : props.children}
    </UserContext.Provider>
  );
}
export { UserContext }
export default UserProvider;
