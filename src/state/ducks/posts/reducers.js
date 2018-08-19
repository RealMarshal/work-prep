import * as types from './types'

const postsReducer = (state = {}, action) => {

  switch(action.type) {
    case types.FETCH_SUCCEDED: {
      return {
        data: action.payload.data
      }
    }
    case types.FETCH_FAILED: {
      return {
        error: action.payload.error
      }
    }
    default: {
      return state
    }
  }
}

export default postsReducer