import { createStore, combineReducers } from 'redux';
import Auth from './services/Auth/reducers';
import Tracker from './services/Tracker/reducers';

export default createStore(
    combineReducers({
        Auth,
        Tracker,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
