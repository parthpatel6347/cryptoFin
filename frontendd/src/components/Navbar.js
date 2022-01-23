import React, { useState, useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { NavbarContainer, NavbarInner, NavLinksContainer, NavLink, Title } from '../styles/NavbarStyles';

const Navbar = () => {
  const {isAuthenticated} = useContext(authContext)

  return (
    <NavbarContainer>
      <NavbarInner>
        <Title to='/dashboard'>CryptoFin</Title>
        <NavLinksContainer>
          {isAuthenticated === true ? (
            <Fragment>
              {' '}
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
            </Fragment>
          ) : (
            <Fragment>
              {' '}
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </Fragment>
          )}
          </NavLinksContainer>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;