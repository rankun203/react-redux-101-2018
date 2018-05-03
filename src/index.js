import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './configureStore';
import MovieList from './movie-list';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <h2>Start editing.. to see some magic happen {'\u2728'}</h2>
    <Provider store={store}>
      <MovieList />
    </Provider>
  </div>
);

render(<App />, document.getElementById('root'));
