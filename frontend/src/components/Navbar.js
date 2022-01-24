import React, { useState, useEffect, Fragment, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { NavbarContainer, NavbarInner, NavLinksContainer, NavLink, Title, LogoutBtn } from '../styles/NavbarStyles';
import Logout from '../views/auth/Logout';


const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const location = useLocation()

  const { isAuthenticated } = useContext(authContext)


  return (
    <NavbarContainer>
      <NavbarInner>
        <Title to='/dashboard'>CryptoFin</Title>
        <NavLinksContainer>
          {isAuthenticated === true ? (
            <Fragment>
              {' '}
              <NavLink to='/dashboard' active={location.pathname === "/dashboard" ? "true" : "false"}>Dashboard</NavLink>
              <NavLink to='/portfolio' active={location.pathname === "/portfolio" ? "true" : "false"}>Portfolio</NavLink>
              <LogoutBtn onClick={handleShow}>Logout</LogoutBtn>
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
      <Modal show={show} onHide={handleClose}>
        <Logout />
      </Modal>
    </NavbarContainer>
  );
};

export default Navbar;