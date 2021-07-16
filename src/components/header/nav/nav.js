import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container className="meganav">
    <ul>
      <li><Link to="/commercial">Commercial</Link></li>
      <li><Link to="/commercialrental">Comm.Rental</Link></li>
      <li><Link to="/condos">Condos</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/foreclosures">Foreclosures</Link></li>
      <li><Link to="/residentialrentals">Res.Rental</Link></li>
      <li><Link to="/rota">Rota</Link></li>
      <li><Link to="/saipan">Saipan</Link></li>
      <li><Link to="/tapochau">Tapochau</Link></li>
      <li><Link to="/tinian">Tinian</Link></li>
      <li><Link to="/vacant">Vacant</Link></li>
    </ul>
  </Container>
);

export default Nav;
