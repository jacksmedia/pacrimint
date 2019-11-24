import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './tech.css';

const Tech = ({ techs }) => (
	<div>
		<Img fluid={techs ? techs.childImageSharp.fluid : {}} alt={techs} />
		<Title>{techs}</Title>
	</div>
);

Tech.propTypes = {
  techs: PropTypes.object.isRequired
};

export default Tech;