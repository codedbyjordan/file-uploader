import React from 'react';
import useUser from '../../hooks/useUser';
import { Redirect } from 'react-router';
import { FaGoogle } from 'react-icons/fa';
import Title from '../Title';

const Login = () => {

  const [user, signIn] = useUser()

  return (
    <div className="form">
      <Title>Login</Title>
      {user.loggedIn ? <Redirect to="/"/> : <button onClick={signIn}><FaGoogle/></button> }  
    </div>
  );
}

export default Login;
