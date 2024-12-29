import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          <h1>KamDone</h1>
        </Link>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
