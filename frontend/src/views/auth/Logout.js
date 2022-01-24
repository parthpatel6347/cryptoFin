import axios from 'axios';
import React, { useState, useEffect, Fragment, useContext } from 'react';
import authContext from '../../context/auth/authContext';
import { CustomButton } from '../../styles/CoinStyles';
import { LogoutButton, Main, StyledText } from '../../styles/LogoutStyles';

const Logout = () => {
  // const [loading, setLoading] = useState(true);

  const { logout, loading } = useContext(authContext)

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
    <Main>
      {loading === false && (
        <Fragment>
          <StyledText>Are you sure you want to logout?</StyledText>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Fragment>
      )}
    </Main>
  );
};

export default Logout;