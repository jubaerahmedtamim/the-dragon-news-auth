import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () =>  {
        logout()
        .then()
        .catch()
    }
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link to='/'>Home</Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav >
                                {
                                    user &&
                                    <FaRegUserCircle style={{ fontSize: "2.3rem" }}></FaRegUserCircle>

                                }

                                {
                                    user ?
                                        <Button onClick={handleLogout} variant="secondary">logout</Button> :
                                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;