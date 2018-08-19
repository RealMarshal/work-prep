import * as types from './types'

export const fetchPosts = () => ({
  type: types.FETCH_REQUESTED
})

export const fetchSuccess = data => ({
  type: types.FETCH_SUCCEDED,
  payload: {
    data
  }
})

export const fetchError = error => ({
  type: types.FETCH_FAILED,
  payload: {
    error
  }
})