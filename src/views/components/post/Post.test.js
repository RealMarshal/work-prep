import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

describe('Post', () => {

  const testPost = {
    title: 'qewrlfda',
    text: 'asdmdamsdower'
  }
  const rendered = shallow(<Post title={testPost.title} text={testPost.text} />)

  it('should render correctly', () => {
    expect(toJson(rendered)).toMatchSnapshot()
  })

  it('should have title', () => {
    expect(rendered.find('.post__title').render().text()).toEqual(testPost.title)
  })

  it('should have text', () => {
    expect(rendered.find('.post__text').render().text()).toEqual(testPost.text)
  })
})