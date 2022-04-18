import React from 'react';

import './Header.css';
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='logo'>
                    Your Photo<span className='G'>G</span>rapher
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto nav-link">
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/blog'
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/about'
                        >
                            About
                        </NavLink>
                        {user ? <p className='signout-btn' onClick={handleSignOut}>SignOut</p> :
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/login'
                            >
                                Login
                            </NavLink>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;