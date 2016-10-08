import React, { PropTypes } from 'react';

const Note = note => (
  <div>
  </div>
);

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired
};

export default Note;
