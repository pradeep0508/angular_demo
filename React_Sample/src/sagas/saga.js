import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

export function* fetchUser(action) {
    try {
        const user =yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts',{});
        yield put({ type: 'SUCCESS_RESPONSE', response:user})
    } catch (err) {
        yield put({ type: 'FAILED_FETCH_REQUEST', message: err.message });
    }
    console.log('Hello Sagas!')
}


function* mySaga() {
    yield takeEvery('SERVICE_REQUEST', fetchUser);
}

export default mySaga;
 