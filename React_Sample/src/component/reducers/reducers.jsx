var defaultStates = {
    inputText: 'defalut text'
}

export var reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                inputText: action.inputText
            };
        case 'SUCCESS_RESPONSE':
            return {
                getPlaceHolderResponse: JSON.stringify(action.response.data)
            };
        default:
        return state;
    }
}