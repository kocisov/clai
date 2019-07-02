import { flexbox, layout, space, color } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {}

export default withDefaultProps(defaultProps, 'div')`
  ${flexbox};
  ${layout};
  ${space};
  ${color};
  display: flex;
`
