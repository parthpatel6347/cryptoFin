import React, { useState, useEffect, useContext } from 'react';
import authContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const {login, error, isAuthenticated, loadUser, token} = useContext(authContext)
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      loadUser().then(()=>navigate('/dashboard'));
    } 
  }, [error, isAuthenticated, props]);

  const onSubmit = e => {
    e.preventDefault();
    login({email, password}).then(() => navigate('/dashboard'))
    };

  return (
    <div>
      {error && <h2>Cannot log in with provided credentials</h2>}
        <form onSubmit={onSubmit}>
          <label htmlFor='email'>Email address:</label> <br />
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input type='submit' value='Login' />
        </form>
    </div>
  );
};

export default Login;