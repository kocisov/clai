import { layout, space, typography } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {}

export default withDefaultProps(defaultProps, 'div')`
  ${layout};
  ${props => props.textTransform && `text-transform: ${props.textTransform};`}
  ${space};
  ${typography};
`
