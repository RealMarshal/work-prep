import React, { Fragment } from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import withCounter from './Counter'

const CounterView = ({value, inc, dec}) => (
  <Fragment>
    <p>{ value }</p>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
  </Fragment>
)

const Counter = withCounter(CounterView)

describe('CounterHOC', () => {
  const rendered = mount(<Counter />)
  let { value, inc, dec } = rendered.find(CounterView).props()

  it('should render passed component', () => {
    expect(toJson(rendered)).toMatchSnapshot()
  })

  it('should pass initial value to the component', () => {
    expect(value).toEqual(0)
  })

  it('should increment value when inc is called', () => {
    inc()
    rendered.update()
    const { value: newValue, setValue } = rendered.find(CounterView).props()
    expect(newValue).toEqual(value + 1)
    setValue(0)
  })

  it('should decrement value when dec is called', () => {
    dec()
    rendered.update()
    const { value: newValue, setValue } = rendered.find(CounterView).props()
    expect(newValue).toEqual(value - 1)
    setValue(0)
  })
})