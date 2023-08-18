import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

/* export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
} */


export default function Navigation({isLoggedIn}) {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >OpenData</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {isLoggedIn?
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link as={Link} to="/dashboard" >Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/cdr" >Call Details Records</Nav.Link>
                                <Nav.Link as={Link} to="/invoices" >Payment & Invoices</Nav.Link>
                                <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    :
                    <>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        </Navbar.Collapse>
                    </>
                    }
                </Container>
            </Navbar>
        </Container>
    )
}