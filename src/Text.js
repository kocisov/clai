import { layout, space, typography, color } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {}

export default withDefaultProps(defaultProps, 'div')`
  ${color};
  ${layout};
  ${(props) => props.textTransform && `text-transform: ${props.textTransform};`}
  ${space};
  ${typography};
`
