import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Learn More</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/alexander-jacks/">LinkedIn</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
