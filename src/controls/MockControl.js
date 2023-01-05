import React from 'react'
import styled from 'styled-components'

const MockControl = () => (
  <StyledMockControl>
    <h1>Mock Control</h1>
  </StyledMockControl>
)

const StyledMockControl = styled.div`
  background-color: red;
  width: 16vw;
  height: 100vh;
`

export default MockControl