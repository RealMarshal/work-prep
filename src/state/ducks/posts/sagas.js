import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from './types'
import api from '../../api'

function* fetchPostsSaga() {
  try {
    const { data } = yield call(api.get, '/posts')
    yield put(actions.fetchSuccess(data))
  } catch(e) {
    yield put(actions.fetchError(e))
  }
}

function* watchFetchPosts() {
  yield takeLatest(types.FETCH_REQUESTED, fetchPostsSaga)
}

export default watchFetchPosts