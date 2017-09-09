export const setInputText = (inputText) => {
    return ({
        type: 'SET_INPUT_VALUE',
        inputText: inputText
    });
};

export const serviceRequest = (url) => {
    return (
        {
            type: 'SERVICE_REQUEST',
            payload: {url}
        }
    );
}

export const serviceResponse = (response) => {
    return (
        {
            type: 'SUCCESS_RESPONSE',
            getPlaceHolderResponse: response
        }
    );
}