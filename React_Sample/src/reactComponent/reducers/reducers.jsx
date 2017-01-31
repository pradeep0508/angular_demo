var defaultStates = {
    inputText: 'defalut text'
}

export var inputTextReducer = (state = defaultStates, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                inputText: action.inputText
            };
        default:
        return state;
    }
}