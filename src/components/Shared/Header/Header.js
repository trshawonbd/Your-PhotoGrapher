import React from 'react';

import './Header.css';
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        
        <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='logo'>
                        Your Photo<span className='G'>G</span>rapher
                    </Navbar.Brand>
                    <Nav className="mx-auto nav-link">
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/services'
                        >
                            Services
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
                        {/* user ? <p className='signout-btn' onClick={handleSignOut}>SignOut</p> : */}
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/login'
                        >
                            Login
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;