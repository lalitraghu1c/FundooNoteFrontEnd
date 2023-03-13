import { createStore, combineReducers } from 'redux';
import { DrawerReducer } from './DrawerReducer';

const reducer = combineReducers({ //for combining multiple reduxer
    DrawerReducer : DrawerReducer
})

const store = createStore(reducer);

export default store;