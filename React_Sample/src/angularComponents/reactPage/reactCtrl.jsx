import React from "react";
import ReactDOM from "react-dom";
import { store } from 'ReduxStore'
import Greeter from "Greeter";
var {Provider} = require('react-redux');

module.exports = function (myApp) {

    myApp.controller('reactController', reactController);
    //rendering react component.
    function reactController() {
        ReactDOM.render(
            <Provider store={store}>
                <Greeter />
            </Provider>, document.getElementById('reactPage')
        );
    }
}




