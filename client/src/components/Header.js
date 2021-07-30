import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import HeaderCarousel from "./HeaderCarousel";

import * as ROUTES from "../constants/routeConstants";

const Header = () => {
  const [show, setShow] = useState(true);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <header style={{ height: "30%" }}>
      <HeaderCarousel />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="me-auto d-flex justify-content-between">
              <LinkContainer to={ROUTES.HOME}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {/* DROPDOWN */}
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <LinkContainer to="/courses/mern">
                  <NavDropdown.Item>MERN</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/courses/mean">
                  <NavDropdown.Item>MEAN</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/courses/mevn">
                  <NavDropdown.Item>MEVN</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />

                {/* SECOND DROPDOWN */}
                <NavDropdown
                  drop="right"
                  title="See more"
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/courses">
                    <NavDropdown.Item className="bg-white text-secondary">
                      Another Project 1
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/courses">
                    <NavDropdown.Item className="bg-white text-secondary">
                      All Courses
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                {/* --------------------------------------------- */}
              </NavDropdown>
              {/* --------------------------------------------- */}
              <LinkContainer to={ROUTES.REGISTRATION}>
                <Nav.Link>Registration</Nav.Link>
              </LinkContainer>
              <LinkContainer to={ROUTES.PHOTO_GALLERY}>
                <Nav.Link>Photo Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to={ROUTES.BLOG}>
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to={ROUTES.HELP}>
                <Nav.Link>Help</Nav.Link>
              </LinkContainer>
              <LinkContainer to={ROUTES.CONTACT_US}>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
