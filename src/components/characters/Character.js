import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  return (
    <section>
      <Link to={`/${character.id}`}>
        <img src={character.img} />
        <p>{character.name}</p>
      </Link>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
