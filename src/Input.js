import { borderRadius, layout, border, space } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {
  borderRadius: 3,
  width: 120,
  p: 2,
  border: `1px solid #e7e7e7`,
}

export default withDefaultProps(defaultProps, 'input')`
  ${border};
  ${borderRadius};
  ${layout};
  ${space};
`
