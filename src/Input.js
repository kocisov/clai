import { borderRadius, layout, border, space } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {
  borderRadius: 3,
  width: 120,
  p: 1,
  border: 0
}

export default withDefaultProps(defaultProps, 'input')`
  ${borderRadius};
  ${border};
  ${layout};
  ${space};
`
