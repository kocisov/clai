import { borderRadius, typography, border, zIndex } from 'styled-system'
import Flex from './Flex'
import withDefaultProps from './withDefaultProps'

const defaultProps = {
  borderRadius: 3,
}

export default withDefaultProps(defaultProps, Flex)`
  ${border};
  ${borderRadius};
  ${typography};
  ${zIndex};
`
