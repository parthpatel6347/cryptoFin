import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import authContext from '../../context/auth/authContext';


const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {register, error, isAuthenticated} = useContext(authContext)

  useEffect(() => {
    if (isAuthenticated) {
      window.location.replace('http://localhost:3000/dashboard');
    } 
  }, [error, isAuthenticated, props]);

  const onSubmit = e => {
    e.preventDefault();

    register({
      username: username,
      first_name: firstName,
      email: email,
      password: password1,
      re_password: password2,
      last_name: lastName,
  }).then(res => {
    if(!error){
      window.location.replace('http://localhost:3000/login');
    }
  })

  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <h2>Cannot signup with provided credentials</h2>}
      <form onSubmit={onSubmit}>
      <label htmlFor='firstName'>First Name:</label> <br />
        <input
          name='firstName'
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />{' '}
        <br />
      <label htmlFor='lastName'>Last Name:</label> <br />
        <input
          name='lastName'
          type='text'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />{' '}
        <br />
        
        <label htmlFor='email'>Email address:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='username'>Username:</label> <br />
        <input
          name='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <input type='submit' value='Signup' />
      </form>
    </div>
  );
};

export default Register;