import styled from '@emotion/styled'

export default function withDefaultProps(defaultProps, element) {
  return (...style) => {
    const Component = styled(element)(style)
    Component.defaultProps = defaultProps
    return Component
  }
}
