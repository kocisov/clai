import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../dist/index.es'

storiesOf('Text', module)
  .add('default', () => <Text>Hello Text</Text>)
  .add('with colors', () => <Text color="#cc343d">Hello Text</Text>)
  .add('with fontSize/Weight', () => (
    <Text fontSize={24} fontWeight={600}>
      Hello Text
    </Text>
  ))
