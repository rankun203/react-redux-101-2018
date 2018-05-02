import ACTION_TYPES from '../actions/action-types';

export function moviesOfList(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.MOVIE_LIST_GET:
      const listId = action.listId;
      return state.concat([
        { id: Math.random(), name: 'Good Movie', listId },
        { id: Math.random(), name: 'Soso Movie', listId },
        { id: Math.random(), name: 'Bad Movie', listId }
      ]);
    default:
      return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.MOVIES_GET:
      return state.concat([
        { id: Math.random(), name: 'Good Movie' },
        { id: Math.random(), name: 'Soso Movie' },
        { id: Math.random(), name: 'Bad Movie' }
      ]);
    default:
      return state;
  }
}
