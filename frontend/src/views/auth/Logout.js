import axios from 'axios';
import React, { useState, useEffect, Fragment, useContext } from 'react';
import authContext from '../../context/auth/authContext';

const Logout = () => {
  // const [loading, setLoading] = useState(true);

  const {logout, loading} = useContext(authContext)

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login');
    } 
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    logout()
    .then(res => {
        localStorage.clear();
        window.location.replace('http://localhost:3000/login');
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;