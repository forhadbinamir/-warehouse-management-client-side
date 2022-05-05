import { signOut } from 'firebase/auth';
import React from 'react';
import logo from '../../images/site-logo/The-Electronic-Warehouse-Retina-Logo.png'
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
                    <Navbar.Brand href="/"><img className='w-32 h-[40px]' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='text-center'>
                            {
                                user && <>
                                    <Nav.Link as={Link} to='/addsupplier'>Add Sup</Nav.Link>
                                    <Nav.Link as={Link} to='/allsupplier'> Manage Sup</Nav.Link>
                                </>


                            }
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