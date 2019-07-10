import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../dist/index.es'

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with colors', () => (
    <Button onClick={action('clicked')} bg="#000" color="#fff">
      Hello Button
    </Button>
  ))
