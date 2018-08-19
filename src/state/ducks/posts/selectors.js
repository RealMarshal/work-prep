import { createSelector } from 'reselect'

const getPosts = state => state.posts

const totalPosts = createSelector(
  getPosts,
  posts => {
    if (!posts.data) return 0
    return posts.data.length
  }
)

const totalAuthors = createSelector(
  getPosts,
  posts => {
    if (!posts.data) return 0
    const numberOfAuthors = new Set()
    posts.data.forEach(post => numberOfAuthors.add(post.userId))
    return numberOfAuthors.size
  }
)

export {
  getPosts,
  totalPosts,
  totalAuthors
}