import React, { useState } from 'react'
import styled from 'styled-components'

const LayoutControl = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <StyledLayoutControl 
      open={ open } 
      onMouseEnter={ () => setOpen(true) }
      onMouseLeave={ () => setOpen(false) }>
      {open && <button type='button'>Orders</button>}
      {open && <button type='button'>Expenses</button>}
    </StyledLayoutControl>
  )
}

const StyledLayoutControl = styled.div`
  background-color: ${ ({ open }) => open ? 'red' : 'transparent' };
  width: ${ ({ open }) => open ? '16vw' : '2vw' };
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
  transition: 0.2s;
`

export default LayoutControl