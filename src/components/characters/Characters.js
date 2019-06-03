import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

function Characters({ characters }) {
  const characterList = characters.map(character => (
    <li key={character.id}>
      <Character character={character} />
    </li>
  ));

  return (
    <>
    <section className={styles.Characters}>
      <header>Avatar List</header>
      <ul>
        {characterList}
      </ul>
    </section>
    </>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Characters;
