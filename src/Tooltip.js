// Not yet (fully) implemented

import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.span`
  position: relative;

  &::after {
    background: #000;
    border-radius: 3px;
    color: #fff;
    content: attr(aria-label);
    font-size: 14px;
    left: 50%;
    opacity: 0;
    padding: 5px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: -40px;
    transform: translateX(-50%);
    white-space: pre;
    word-wrap: break-word;
    z-index: 10;
  }

  &::before {
    border-color: #000 transparent transparent transparent;
    border-style: solid;
    border-width: 5px;
    content: '';
    left: 50%;
    opacity: 0;
    position: absolute;
    top: -10px;
    transform: translateX(-50%);
  }

  &:hover,
  &:active,
  &:focus {
    &::after,
    &::before {
      animation: fade 0.2s forwards ease-in;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export default function Tooltip({ text, children }) {
  return <Wrapper aria-label={text}>{children}</Wrapper>
}
