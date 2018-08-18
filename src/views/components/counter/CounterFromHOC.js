import withCounter from '../../HOC/Counter'
import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Counter = withCounter(({value, inc, dec}) =>
  <Fragment>
    <Typography>{value}</Typography>
    <Button color='primary' onClick={dec}>Dec</Button>
    <Button color='primary' onClick={inc}>Inc</Button>    
  </Fragment>
)

export default Counter
