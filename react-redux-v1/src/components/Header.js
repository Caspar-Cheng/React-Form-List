import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

export const Header = () => {
  return (
    <Navbar color="primary">
      <Nav>
        <NavItem className="mx-3">
          <Link className="btn btn-primary" to="/todo">
            todo
          </Link>
        </NavItem>
        <NavItem>
          <Link className="btn btn-primary" to="/about">
            about
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
