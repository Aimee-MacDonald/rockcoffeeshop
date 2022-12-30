import React from 'react'
import styled from 'styled-components'

import PointOfSales from '../workspaces/PointOfSales'

const WorkspaceLayer = () => (
  <StyledWorkspaceLayer>
    <PointOfSales/>
  </StyledWorkspaceLayer>
)

const StyledWorkspaceLayer = styled.div`
  background-color: purple;
  position: fixed;
  z-index: 10;
`

export default WorkspaceLayer