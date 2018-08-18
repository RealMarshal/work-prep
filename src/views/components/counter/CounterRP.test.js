import { shallow } from 'enzyme'
import React from 'react'
import Counter from './CounterRP'

describe('CounterRP', () => {
  const render = jest.fn()
  const rendered = shallow(<Counter render={render} />)

  const instance  = rendered.instance()

  const initialState = {
    value: 0
  }
  const { value } = initialState

  afterEach(() => {
    instance.setState(initialState)
  })

  it('should call render prop', () => {
    expect(render).toHaveBeenCalled()
  })

  it('should have initial value', () => {
    expect(rendered.state()).toEqual(initialState)
  })

  it('should increment value when inc is called', () => {
    instance.inc()
    const { value: newValue } = rendered.state()
    expect(newValue).toEqual(value + 1)
  })

  it('should decrement value when dec is called', () => {
    instance.dec()
    const { value: newValue } = rendered.state()
    expect(newValue).toEqual(value - 1)
  })
})