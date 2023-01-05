import React from 'react'
import styled from 'styled-components'

const LayoutControl = () => (
  <StyledLayoutControl>
    <button type='button'>Orders</button>
    <button type='button'>Expenses</button>
  </StyledLayoutControl>
)

const StyledLayoutControl = styled.div`
  background-color: red;
  width: 16vw;
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
`

export default LayoutControl