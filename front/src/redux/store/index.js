import {createStore, applyMiddleware, compose} from 'redux';
import {reducer} from "../reducer/index";
// import {thunkMiddleware} from 'redux-thunk'
import thunk from 'redux-thunk';



const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunk))); // Esta linea nos permite hacer petic

export default store 