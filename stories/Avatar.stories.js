import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../dist/index.es'

storiesOf('Avatar', module)
  .add('default', () => <Avatar src="http://placekeanu.com/200/200" alt="" />)
  .add('with size', () => (
    <Avatar size={80} src="http://placekeanu.com/200/200" alt="" />
  ))
  .add('with size/border', () => (
    <Avatar
      size={180}
      borderRadius="50%"
      src="http://placekeanu.com/200/200"
      alt=""
    />
  ))
