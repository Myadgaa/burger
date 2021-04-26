
import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";


export class Navbar extends Component {

    render() {
        return (
            <div className="mt-4">
                <ReactBootStrap.Navbar expand="lg" bg="primary" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="basic-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
                    <ReactBootStrap.Navbar.Collapse id="basic-ReactBootStrap.Navbar-ReactBootStrap.Nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="Dropdown" id="basic-ReactBootStrap.Nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}