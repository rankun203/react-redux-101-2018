import Redux from 'redux';
import * as reducers from './reducers';

const store = Redux.createStore(Redux.combineReducers(reducers));

export default store;
