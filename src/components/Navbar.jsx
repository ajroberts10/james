import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
    return (
        <div className="Navbar">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">James Arthur Roberts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <Nav.Link href="/films">Films</Nav.Link>
                        <Nav.Link href="/art">Art</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default App;
