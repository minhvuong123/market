import { all, put, takeLatest } from 'redux-saga/effects';
import { actionLabel, ADD_ID } from '../actions';

export function* helloSaga() {
    yield put({
        type: ADD_ID,
        id: Math.random().toString(36).substring(7)
    });
}

function* actionWatcher() {
    yield takeLatest(actionLabel, helloSaga);
}


export function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}