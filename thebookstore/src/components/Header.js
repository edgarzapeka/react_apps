import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { header } from '../styles/componenets/header.scss';

const Header = props => {

    return (    
        <Navbar>
            <Nav>
                <Link to="/" className="navbar-brand">
                    TheBookStore
                </Link>
                <NavItem >
                    <Link to="/new" className="nav-link">
                        What's new
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
        
    )
}

export default Header;