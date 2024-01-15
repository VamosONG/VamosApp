import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "../reducer/index";
//import thunk from 'redux-thunk'
 import {withExtraArgument} from 'redux-thunk';
 import choferes from '../../utils/chofer';



const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea

const store = createStore(
    reducer,
     composeEnhacer(applyMiddleware(withExtraArgument(choferes)))); // Esta linea nos permite hacer petic
    //composeEnhacer(applyMiddleware(thunk))); 

export default store 
