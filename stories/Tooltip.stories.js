import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, Text, Position } from '../dist/index.es'

storiesOf('Tooltip', module).add('default', () => (
  <Position position="relative" m={5}>
    <Tooltip text="Tooltip text">
      <Text>Hello Tooltip</Text>
    </Tooltip>
  </Position>
))
