import React from 'react';
import PropTypes from 'prop-types';
import Note from 'components/notebook/note';
import { Container } from './notebook.css';

const Notebook = ({ notes }) => (
  <Container>
    {notes.map((note, i) => (
      <Note {...note} key={i} />
    ))}
  </Container>
);

Notebook.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Notebook;
