import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import Counter from './CounterFromHOC'

describe('CounterFromHOC', () => {
  const rendered = mount(<Counter />)

  it('should render correctly', () => {
    // For some reason it runs out of memory without using toJson
    expect(toJson(rendered)).toMatchSnapshot()
  })

  it('should render value', () => {
    expect(rendered.find('p').text()).toEqual('0')
  })

  it('should render 2 buttons', () => {
    expect(rendered.find('button')).toHaveLength(2)
  })
})