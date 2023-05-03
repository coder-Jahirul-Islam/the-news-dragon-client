import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';



const NavigationBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={'/category/0'}>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle className='me-2' style={{ fontSize: "2rem" }}></FaUserCircle>
                            }

                            {user ? <Button variant="secondary">Log0ut</Button> :
                                <Link to={'/login'}>
                                    <Button variant="secondary">
                                    Login
                                    </Button>
                                </Link>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </Container >
    );
};

export default NavigationBar;