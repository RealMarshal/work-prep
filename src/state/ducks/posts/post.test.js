import reducer from './index'
import * as actions from './actions'
import * as types from './types'
import * as selectors from './selectors'


describe('posts action creators', () => {

  describe('fetchPosts action creator', () => {
    const expectedAction = {
      type: types.FETCH_REQUESTED
    }
    const action = actions.fetchPosts()

    it('should return action to request fetching posts', () => {
      expect(action).toEqual(expectedAction)
    })
  })

  describe('fetchSuccess action creator', () => {
    const testData = [{
      userId: 0,
      id: 11,
      title: 'et ea vero quia laudantium autem',
      body: 'delectus reiciendis molestiae'
    }]
    const expectedAction = {
      type: types.FETCH_SUCCEDED,
      payload: {
        data: testData
      }
    }
    const action = actions.fetchSuccess(testData)

    it('should return action with recieved data', () => {
      expect(action).toEqual(expectedAction)
    })
  })

  describe('fetchError action creator', () => {
    const testError = 'Something bad happened'
    const expectedAction = {
      type: types.FETCH_FAILED,
      payload: {
        error: testError
      }
    }
    const action = actions.fetchError(testError)

    it('should return action with recieved error', () => {
      expect(action).toEqual(expectedAction)
    })
  })
})


describe('posts reducer', () => {

  const initialState = {}

  it('should return initial state', () => {
    const result = reducer(undefined, {})
    expect(result).toEqual(initialState)
  })

  it('should handle FETCH_SUCCEDED', () => {
    const testData = [{
      userId: 1,
      id: 14,
      title: 'voluptatem eligendi optio',
      body: 'fuga et accusamus dolorum perferendis'
    }]
    const expectedState = {
      data: testData
    }
    const fetchSuccess = actions.fetchSuccess(testData)
    const result = reducer(initialState, fetchSuccess)
    expect(result).toEqual(expectedState)
  })

  it('should handle FETCH_FAILED', () => {
    const testError = 'Awful error'
    const expectedState = {
      error: testError
    }
    const fetchError = actions.fetchError(testError)
    const result = reducer(initialState, fetchError)
    expect(result).toEqual(expectedState)
  })
})

describe('posts selectors', () => {

  describe('getPosts selector', () => {
    const testStore = {
      posts: []
    }
    it('should return posts from store', () => {
      expect(selectors.getPosts(testStore)).toEqual(testStore.posts)
    })
  })

  describe('totalPosts selector', () => {
    const testStore = {
      posts: {
        data: [{ id: 1, body: 'sdgf' }, { id: 5, body: 'qwe' }]
      }
    }
    it('should return total number of posts in store', () => {
      expect(selectors.totalPosts(testStore)).toEqual(2)
    })
  })

  describe('totalAuthors selector', () => {
    const testStore = {
      posts: {
        data: [{ userId: 2 }, { userId: 5 }, { userId: 2 }, { userId: 3 }]
      }
    }
    it('should return total number of authors of posts in store', () => {
      expect(selectors.totalAuthors(testStore)).toEqual(3)
    }) 
  })
})