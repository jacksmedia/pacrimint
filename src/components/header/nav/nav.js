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
        <a href="https://whereby.com/j4cks">Meet</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
