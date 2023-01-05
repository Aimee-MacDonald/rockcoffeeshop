import React from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

import StateProvider from './state/StateProvider'

import GlobalStyle from '../GlobalStyle'
import WorkspaceLayer from './layers/WorkspaceLayer'
import ControlsLayer from './layers/ControlsLayer'
import ModalLayer from './layers/ModalLayer'

const container = document.getElementById('root')
const root = createRoot(container)

const MainComponent = () => (
  <StateProvider>
    <StyledMainComponent>
      <GlobalStyle/>
      <WorkspaceLayer/>
      <ControlsLayer/>
      <ModalLayer/>
    </StyledMainComponent>
  </StateProvider>
)

const StyledMainComponent = styled.div`
  background-color: red;
  position: relative;
  width: 100vw;
  height: 100vh;
`

root.render(<MainComponent />)