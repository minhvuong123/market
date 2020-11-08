import { all, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../actions';

export function* setLoading() {
    yield put({
        type: LOADING_STATUS,
        loading: false
    });
}

function* actionWatcher() {
    yield takeLatest('GET_PRODUCT', setLoading);
}


export function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}