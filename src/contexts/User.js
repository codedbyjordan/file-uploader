import React, { useReducer } from 'react';

const initialUserState = {
  loggedIn: false
}

const userReducer = (state, action) => {
  switch(action.type) {
    case 'sign_in':
      return {
        loggedIn: true,
        displayName: action.payload.displayName,
        email: action.payload.email,
        id: action.payload.id
      }
    case 'sign_out':
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

  return (
    <UserContext.Provider value={{user, userDispatch}}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext }
export default UserProvider;
