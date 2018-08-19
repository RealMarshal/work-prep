import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { PostsWrapper, PostsStats, PostsList } from './PostsWrapper'
import CircularProgress from '@material-ui/core/CircularProgress'

describe('PostsStats', () => {

  const testProps = {
    totalPosts: 1,
    totalAuthors: 1
  }
  const rendered = shallow(<PostsStats {...testProps} />)

  it('should render correctly', () => {
    expect(toJson(rendered)).toMatchSnapshot()
  })

  it('should show number of posts', () => {
    const expectedValue = `Постов ${testProps.totalPosts}`
    expect(rendered.find('.post__totalPosts').render().text()).toEqual(expectedValue)
  })

  it('should show number of authors', () => {
    const expectedValue = `Авторов ${testProps.totalAuthors}`
    expect(rendered.find('.post__totalAuthors').render().text()).toEqual(expectedValue)
  })
})

describe('PostsList', () => {

  it('should show loading indicator', () => {
    const testProps = {
      posts: []
    }
    const rendered = shallow(<PostsList {...testProps} />)
    expect(rendered.find(CircularProgress).exists()).toEqual(true)
  })

  it('should show posts', () => {
    const testProps = {
      posts: {
        data: [{ title: 'sdsd', body: 'sdsdwqe', id: 4}]
      }
    }
    const expectedPost = {
      title: testProps.posts.data[0].title,
      text: testProps.posts.data[0].body
    }
    const rendered = shallow(<PostsList {...testProps} />)
    expect(rendered.find('Post').props()).toEqual(expectedPost)
  })

  it('should show error', () => {
    const testProps = {
      posts: {
        error: 'Error happened'
      }
    }
    const rendered = shallow(<PostsList {...testProps} />)
    expect(rendered.find('.post__errorMessage').render().text()).toEqual('Ошибка получения данных')
  })
})

describe('PostsWrapper', () => {

  const testProps = {
    posts: [{ title: 'asdas', text: 'asdqwe', id: 3}],
    totalPosts: 1,
    totalAuthors: 1
  }
  const rendered = shallow(<PostsWrapper {...testProps} />)

  it('should render correctly', () => {
    expect(toJson(rendered)).toMatchSnapshot()
  })

  it('should contain PostsStats', () => {
    expect(rendered.find(PostsStats).exists()).toEqual(true)
  })

  it('should contain PostsList', () => {
    expect(rendered.find(PostsList).exists()).toEqual(true)
  })

  it('should pass stats to PostsStats', () => {
    const { totalPosts, totalAuthors } = testProps
    expect(rendered.find(PostsStats).props()).toEqual({totalPosts, totalAuthors})
  })

  it('should pass posts to PostsList', () => {
    const { posts } = testProps
    expect(rendered.find(PostsList).props()).toEqual({posts})
  })
})