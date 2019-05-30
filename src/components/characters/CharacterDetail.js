import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterDetail.css';
import { Link } from 'react-router-dom';

function CharacterDetail({ character }) {
  const {
    name,
    image,
    position
  } = character;

  return (
    <div className={styles.Characters}>
      <Link to={'/'}>
        <h2>{name}</h2>
      </Link>
      <p>{position}</p>
      <img src={image} />
    </div>
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
