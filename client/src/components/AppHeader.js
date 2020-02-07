import React, { Component }  from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {UserContext} from '../contexts/UserContext';
import { Link } from 'react-router-dom';


class AppHeader extends Component {
    static contextType = UserContext;
    render() {
        console.log(this.context);
        const isLoggedIn = this.context.isLoggedIn;
        let adminMenu;
        if(isLoggedIn) {
            adminMenu = <div>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
                <Link className="nav-link" to="/addProperty">Add Property</Link>
                <Link className="nav-link" to="#">Edit Property</Link>
                <Link className="nav-link" to="#">ToDo</Link>
                <NavDropdown.Divider />
                <Link className="nav-link" to="#">Logout</Link>
            </NavDropdown>
        </div>
        }
        return (
            <Navbar bg="light" expand="md" sticky="top" >
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="/properties">Properties</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    {adminMenu}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        
        )
    };
}

export default AppHeader;   
