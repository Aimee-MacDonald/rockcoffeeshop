import React from 'react'
import styled from 'styled-components'

import LayoutControl from '../controls/LayoutControl'
import MockControl from '../controls/MockControl'

const ControlsLayer = () => (
  <StyledControlsLayer>
    <LayoutControl/>
    <MockControl/>
  </StyledControlsLayer>
)

const StyledControlsLayer = styled.div`
  background-color: red;
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 0;
  overflow-y: visible;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`

export default ControlsLayer