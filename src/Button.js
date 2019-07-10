import {
  borderRadius,
  size,
  space,
  border,
  flexbox,
  color,
} from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {
  disabled: false,
  border: 0,
  p: 2,
  borderRadius: 3,
}

export default withDefaultProps(defaultProps, 'button')`
  ${border};
  ${borderRadius};
  ${color};
  ${flexbox};
  ${size};
  ${space};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`
