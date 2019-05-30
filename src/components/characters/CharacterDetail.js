import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const {
    name,
    image,
    position
  } = character;

  return (
    <section>
      <h2>{name}</h2>
      <p>{position}</p>
      <img src={image} />
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;
