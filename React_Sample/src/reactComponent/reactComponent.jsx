import React from "react";
var ReactDOM = require("react-dom");
var {connect} = require('react-redux');
var actions = require('./actions/actions.jsx')

var Greeter = React.createClass({
    onFormSubmit(e) {
        e.preventDefault();
        var {inputText, dispatch} = this.props;
        var inputText = this.refs.inputText.value; 
        dispatch(actions.setInputText(this.refs.inputText.value))
    },
    render: function () {
        var {inputText, dispatch} = this.props;
        return (
            <div>
                <h1>React Component</h1>
                <h5>State value from redux Store: {inputText} </h5>
                <form onSubmit={this.onFormSubmit}>
                    <input type='input' ref="inputText" width='100' />
                    <button type='submit'>Pass to Redux store</button>
                </form>
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return {
            inputText: state.inputText
        };
    }
)(Greeter);
