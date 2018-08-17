import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button'

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
    return (
      <Fragment>
        <p>{this.state.value}</p>
        <Button color='primary' onClick={() => this.inc()}>Inc</Button>
        <Button color='primary' onCLick={() => this.dec()}>Dec</Button>
      </Fragment>
    )
  }
}

export default Counter