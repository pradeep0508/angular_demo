

import React from "react";
import ReactDOM from "react-dom";
import { store } from 'ReduxStore'
import Greeter from "Greeter";
var {Provider} = require('react-redux');



ReactDOM.render(
            <Provider store={store}>
                <Greeter />
            </Provider>, document.getElementById('reactPage')
        );