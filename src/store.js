import { createStore, applyMiddleware } from "redux";
import reducer from '../src/reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;