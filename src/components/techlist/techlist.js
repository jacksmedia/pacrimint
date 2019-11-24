import React from 'react';
import PropTypes from 'prop-types';
import Tech from 'components/techlist/tech';

const TechList = ({ techs }) => (
	<div>
		{techs.map((tech, i) => (
			<Tech {...tech} key={i} />
		))}
	</div>
);

TechList.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TechList;
