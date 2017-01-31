var redux = require('redux');
var {inputTextReducer} = require('Reducers');

export var store = redux.createStore(inputTextReducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);