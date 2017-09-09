import React from "react";
const ReactDOM = require("react-dom");
const {connect} = require('react-redux');
const actions = require('./actions/actions.jsx')

const Greeter = React.createClass({
    onFormSubmit(e) {
        e.preventDefault();
        const {inputText, dispatch} = this.props;
        dispatch(actions.setInputText(this.refs.inputText.value));
    },
    onButtonClicked(e){
        const {inputText, dispatch} = this.props;
        dispatch(actions.serviceRequest(inputText));
    },
    render: function () {
        const {inputText, getPlaceHolderResponse} = this.props;
        return (
            <div>
                <h1>React Component</h1>
                <h5>State value from redux Store: {getPlaceHolderResponse} </h5>
                    <input type='input' ref="inputText" width='100' />
                    <button type='button' onClick={this.onFormSubmit}>Pass to Redux store</button>
                    <br/>
                    <button class='padding: 15px;margin: 15px' type='button' onClick={this.onButtonClicked}>Pass to Redux store</button>
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return {
            inputText: state.inputText,
            getPlaceHolderResponse: state.getPlaceHolderResponse
        };
    }
)(Greeter);
 