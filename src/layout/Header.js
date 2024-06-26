/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import { React, useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown, Stack } from 'react-bootstrap';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../redux-toolkit/actions/auth';
import './header.css';

const Header = () => {
  const pathname1 = window.location.pathname;
  const { isAuthenticated } = useSelector((state) => state.authState);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const cartItemsFromStorage =
    JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(cartItemsFromStorage);

  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  const isloggedIn = localStorage.getItem('isloggedIn' || false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const handleLogout = () => {
    dispatch(logout);
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.clear();
    localStorage.clear();
    window.localStorage.setItem('isloggedIn', false);
    window.localStorage.setItem('isloggedIn', false);
    setIsLoggedIn(false);
    navigate('/login');
  };

  const getUserRole = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.role;
    }
    return null;
  };

  const role = getUserRole();
  useEffect(() => {
    setNavbarExpanded(false);
  }, [navigate, token]);
  return (
    <Navbar
      expand="lg"
      className="header-custom custom-navbar"
      id="header"
      style={{ backgroundColor: 'white', color: 'black' }}
      expanded={navbarExpanded}
    >
      {pathname1 === '/login' ||
      pathname1 === '/signup' ||
      pathname1 === '/password/forgot' ||
      pathname1 === '/login/otp' ||
      pathname1 === '/loginWithOtp' ||
      pathname1 === `/api/password/reset/:${token}` ? (
        <></>
      ) : (
        <Container>
          <Navbar.Brand className="col-md-1 ">
            <Nav.Link as={Link} to="/">
              <img
                src={require('../assets/img/grandIndiaLogo1.png')}
                alt='Grand India Logo'
                style={{ height: '40px', width: '130px' }}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavbarToggle}
            style={{ border: '2px solid #8D4527' }}
          >
            {' '}
            <FontAwesomeIcon icon={faBars} style={{ color: '#8D4527' }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              style={{ fontSize: '17px', fontWeight: '600', color: '#2a206b' }}
              className="col-md-7 col-lg-10 mx-auto"
            >
              {isloggedIn === 'true' ? (
                <>
                  {role === 'user' && (
                    <>
                    <ul>
                  <li>
                  <NavLink to="/" id="HomeTag"  className='ms-lg-4' >
                       Home
                        </NavLink>
                        </li>
                        <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to="/select">
                        Order
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to={`/myProfile/${user._id}`}>
                       Profile
                      </NavLink>
                      </li>
                      </ul>
                    </>
                  )}
                  {role === 'admin' && (
                    <>
                      <ul>
                  <li>
                  <NavLink to="/" id="HomeTag" className='ms-lg-4'  >
                        Home
                  </NavLink>
                  </li>
                  <li>
                      <NavLink to="/select" id="HomeTag" className='ms-lg-4'>
                        Order
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to={`/myProfile/${user._id}`}>
                        Profile
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to="/admin/dashboard">
                        Dashboard
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to="/admin/orders">
                        <span>Active Orders</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4' to="/admin/orderHistory">
                        Order History
                      </NavLink>
                      </li>
                      <li>
                      <NavLink id="HomeTag" className='ms-lg-4'  as={Link} to="/admin/menus">
                        Menus
                      </NavLink>
                      </li>
                      </ul>
                    </>
                  )}
                  {role === 'superAdmin' && (
                    <>
               <ul>
                  <li>
                  <NavLink to="/admin/dashboard" id="HomeTag" className='ms-lg-4'  >
                        <span>Dashboard</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink  id="HomeTag" className='ms-lg-4' to="/admin/orders">
                        <span>Active Orders</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink  id="HomeTag" className='ms-lg-4' to="/admin/menus">
                        <span>Menus</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink  id="HomeTag" className='ms-lg-4' to="/admin/orderHistory">
                        <span>Order History</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink  id="HomeTag" className='ms-lg-4' to="/admin/users">
                        <span>Users</span>
                      </NavLink>
                      </li>
                      <li>
                      <NavLink  id="HomeTag" className='ms-lg-4' to="/admin/restaurants">
                        <span>Restaurants</span>
                      </NavLink>
                      </li>
                      </ul>
                    </>
                  )}
                  <div
                    className="logout-login-buttons"
                    style={{ marginRight: '-5rem' }}
                  >
                    {!isLoggedIn ? (
                      <Nav.Link
                        style={{
                          borderRadius: '30px',
                          width: '100px',
                          backgroundColor: '#f0b06c',
                          textAlign: 'center',
                          display: 'inline-block',
                          borderColor: '#f0b06c'
                        }}
                        className="my-global-button mx-auto"
                        onClick={handleLogout}
                      >
                        Logout
                      </Nav.Link>
                    ) : (
                      <>
                        <Stack direction="horizontal" gap={3} />
                        <Nav.Link
                          style={{
                            borderRadius: '30px',
                            width: '100px',
                            backgroundColor: '#f0b06c',
                            textAlign: 'center',
                            display: 'inline-block',
                            borderColor: '#f0b06c'
                          }}
                          className="my-global-button mx-auto"
                          as={Link}
                          to="/login"
                        >
                          Login
                        </Nav.Link>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                <ul>
                  <li>
                  <NavLink to="/" id="HomeTag"  className='ms-lg-4'  >
                   Home
                  </NavLink>
                  </li>
                  <li><NavLink to="/select" className='ps-lg-4' id="HomeTag" >
                  Order
                  </NavLink>
                  </li>
                  </ul>
                  <div
                    className="logout-login-buttons"
                    style={{ marginRight: '-10rem' }}
                  >
                    <Stack direction="horizontal" gap={3} />
                    {isLoggedIn ? (
                      <Nav.Link
                        className="my-global-button1 mx-auto"
                        style={{
                          borderRadius: '30px',
                          width: '100px',
                          textAlign: 'center',
                          display: 'inline-block',
                          backgroundColor: '#f0b06c',
                          borderColor: '#f0b06c'
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Nav.Link>
                    ) : (
                      <Nav>
                        <Stack direction="horizontal" gap={3} />
                        <Nav.Link
                          style={{
                            borderRadius: '30px',
                            width: '100px',
                            textAlign: 'center',
                            display: 'inline-block',
                            backgroundColor: '#f0b06c',
                            borderColor: '#f0b06c'
                          }}
                          className="my-global-button1 mx-auto mt-lg-n1"
                          as={Link}
                          to="/login"
                        >
                          Login
                        </Nav.Link>
                      </Nav>
                    )}
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
};
export default Header;