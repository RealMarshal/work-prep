import React from 'react'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import Post from './Post'
import { getPosts, totalPosts, totalAuthors } from '../../../state/ducks/posts/selectors'
import { fetchPosts } from '../../../state/ducks/posts/operations'


const PostsList = ({posts}) => (
  <div className='posts__postsList'>
    { !posts.data && !posts.error && <CircularProgress /> }
    { 
      posts.data && posts.data.map(post =>
        <Post key={post.id} title={post.title} text={post.body} /> )
    }
    { posts.error && <Typography variant='caption' color='error'>Error getting posts</Typography> }
  </div>
)

const PostsStats = ({totalPosts, totalAuthors}) => (
  <div className='posts__postsStats'>
    <Typography>{ totalPosts }</Typography>
    <Typography>{ totalAuthors }</Typography>
  </div>
)

const PostsWrapper = ({posts, totalPosts, totalAuthors}) => (
  <div className='posts'>
    <PostsStats totalPosts={totalPosts} totalAuthors={totalAuthors} />
    <PostsList posts={posts} />
  </div>
)

const mapStateToProps = state => ({
  posts: getPosts(state),
  totalPosts: totalPosts(state),
  totalAuthors: totalAuthors(state)
})

const mapDispatchToProps = {
  fetchPosts
}

const withFetchPosts = lifecycle({
  componentDidMount() {
    this.props.fetchPosts()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withFetchPosts(PostsWrapper))