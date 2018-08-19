import { all } from 'redux-saga/effects'

import postSaga from './posts/sagas'

function* rootSaga() {
  yield all([
    postSaga()
  ])
}

export default rootSaga