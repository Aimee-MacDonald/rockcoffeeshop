import React, { useState } from 'react'
import styled from 'styled-components'

const ExpensesControl = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <StyledExpensesControl 
      open={ open }
      onMouseEnter={ () => setOpen(true) }
      onMouseLeave={ () => setOpen(false) }>
        
      {open && <button>Add Expense </button>}
    </StyledExpensesControl>
  )
}

const StyledExpensesControl = styled.div`
  background-color: ${ ({ open }) => open ? 'red' : 'transparent' };
  width: ${ ({ open }) => open ? '16vw' : '2vw' };
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
  transition: 0.2s;
`

export default ExpensesControl