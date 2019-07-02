import { borderRadius, size, space } from 'styled-system'
import withDefaultProps from './withDefaultProps'

const defaultProps = {
  borderRadius: 3,
  size: 40,
  alt: ''
}

export default withDefaultProps(defaultProps, 'img')`
  ${borderRadius};
  ${size};
  ${space};
  object-fit: cover;
`
