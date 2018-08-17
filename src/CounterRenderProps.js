import React, { Component } from 'react'

class Counter extends Component {

  state = {
    value: 0
  }

  inc() {
    this.setState(({value}) => ({
      value: value + 1
    }))
  }

  dec() {
    this.setState(({value}) => ({
      value: value - 1
    }))
  }

  render() {
    const { inc, dec } = this
    return this.props.render(this.state.value, inc.bind(this), dec.bind(this))
  }
}

export default Counter