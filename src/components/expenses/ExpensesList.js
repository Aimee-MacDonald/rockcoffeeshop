import React from 'react'
import styled from 'styled-components'

const ExpensesList = () => (
  <StyledExpensesList>
    <li>Expense One</li>
    <li>Expense Two</li>
    <li>Expense Three</li>
    <li>Expense Four</li>
  </StyledExpensesList>
)

const StyledExpensesList = styled.ul`
  background-color: yellow;
`

export default ExpensesList