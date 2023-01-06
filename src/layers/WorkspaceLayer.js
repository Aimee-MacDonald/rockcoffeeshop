import React, { useState } from 'react'
import styled from 'styled-components'

import PointOfSales from '../workspaces/PointOfSales'
import Expenses from '../workspaces/Expenses'

const WorkspaceLayer = () => {
  const [ activeWorkspace, setActiveWorkspace ] = useState('EXPENSES')

  return (
    <StyledWorkspaceLayer>
      {activeWorkspace === 'POINT_OF_SALES' && <PointOfSales/>}
      {activeWorkspace === 'EXPENSES' && <Expenses/>}
    </StyledWorkspaceLayer>
  )
}

const StyledWorkspaceLayer = styled.div`
  background-color: purple;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
`

export default WorkspaceLayer