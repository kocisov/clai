import { position } from 'styled-system'
import withDefaultProps from './withDefaultProps'
import Flex from './Flex'

const defaultProps = {
  position: 'absolute',
  zIndex: 2
}

export default withDefaultProps(defaultProps, Flex)`
  ${position};
`
