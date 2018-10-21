

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import notesReducer from './reducers/notes';
import filtersReducer from './reducers/filters';

import './styles/styles.css';



const store = createStore(combineReducers({
    notes: notesReducer,
    filters: filtersReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));