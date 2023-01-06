import React from 'react'
import styled from 'styled-components'

import ExpensesList from '../components/expenses/ExpensesList'

const Expenses = () => (
  <StyledExpenses>
    <ExpensesList/>
  </StyledExpenses>
)

const StyledExpenses = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default Expenses