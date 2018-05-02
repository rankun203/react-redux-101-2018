import ACTION_TYPES from './action-types';

export const getMovieList = id => ({
  type: ACTION_TYPES.MOVIE_LIST_GET,
  listId: id
});
