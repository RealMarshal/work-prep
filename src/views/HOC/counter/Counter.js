import { compose, withState, withHandlers, setDisplayName } from 'recompose'

const withCounter = compose(
  withState('value', 'setValue', 0),
  withHandlers({
    inc: ({setValue}) => e => setValue(n => n + 1),
    dec: ({setValue}) => e => setValue(n => n - 1)
  }),
  setDisplayName('Counter')
)

export default withCounter