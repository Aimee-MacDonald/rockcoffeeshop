import React from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import WorkspaceLayer from './layers/WorkspaceLayer'

const container = document.getElementById('root')
const root = createRoot(container)

const MainComponent = () => (
  <StyledMainComponent>
    <GlobalStyle/>
    <WorkspaceLayer/>
  </StyledMainComponent>
)

const StyledMainComponent = styled.div`
  background-color: green;
  width: 100vw;
  height: 100vh;
`

root.render(<MainComponent />)