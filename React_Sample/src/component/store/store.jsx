//var redux = require('redux');
import { createStore, applyMiddleware, compose } from 'redux'
import {reducer} from 'Reducers';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../../sagas/saga.js'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);


// export const store = createStore(inputTextReducer, applyMiddleware(sagaMiddleware), compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );


// then run the saga
