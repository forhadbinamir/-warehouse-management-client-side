import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Hooks/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar className='bg-purple-600 font-semibold' collapseOnSelect expand="lg" variant="dark">
                <div className='container'>
                    <Navbar.Brand href="/">Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link onClick={logOut}>Logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar >
        </div >
    );
};

export default Header;