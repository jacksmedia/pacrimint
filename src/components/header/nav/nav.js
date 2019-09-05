import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/devnotes">Devnotes</Link>
      </li>
      <li>
        <Link to="/about">Learn More</Link>
      </li>
      <li>
        <a href="/login">Client Login</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
