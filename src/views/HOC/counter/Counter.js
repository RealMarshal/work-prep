import { compose, withState, withHandlers } from 'recompose'

const withCounter = compose(
  withState('value', 'setValue', 0),
  withHandlers({
    inc: ({setValue}) => e => setValue(n => n + 1),
    dec: ({setValue}) => e => setValue(n => n - 1)
  })
)

export default withCounter