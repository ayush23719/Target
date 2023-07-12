import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <Menu fixed="top" className="navbar" style={{ marginTop: "1em" }}>
      <Container>
        <Menu.Item as={Link} to="/" header>
          Target App
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/upload">
            Upload
          </Menu.Item>
          <Menu.Item as={Link} to="/search">
            Search
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
