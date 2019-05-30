import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/characters/Characters';
import { connect } from 'react-redux';
import { getCharacters, getCharactersLoading, getCharactersError } from '../selectors/charactersSelector';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.any.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading, error } = this.props;
    if(loading) return <h1>LOADING!</h1>;
    return <Characters characters={characters} error={error} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
