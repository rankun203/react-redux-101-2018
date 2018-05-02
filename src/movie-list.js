import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;
    const m = movie || {};
    return <li>{`${m.name}, list#${m.listId}`}</li>;
  }
}

class MovieList extends React.Component {
  render() {
    const { dispatch, moviesOfList = [] } = this.props;
    return (
      <div>
        <button onClick={() => dispatch(actions.getMovieList(1))}>
          Load Movies
        </button>
        <ul>{moviesOfList.map(m => <MovieItem key={m.id} movie={m} />)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesOfList: state.moviesOfList
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
