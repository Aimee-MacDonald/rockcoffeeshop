import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../../state/StateProvider'

const Order = () => {
  const state = useContext(StateContext)
  const { orders, activeOrder } = state

  return (
    <StyledOrder>
      {orders[activeOrder].items && orders[activeOrder].items.map(orderItem => orderItem.quantity > 0 && (
        <li>
          <p>{ orderItem.quantity }</p>
          <p>{ orderItem.name }</p>
          <p>{ `R ${ orderItem.price * orderItem.quantity }` }</p>
        </li>
      ))}

      <li>
        <p>Total:</p>
        <p>{` R ${ orders[activeOrder].items.reduce((acc, it) => acc + (it.quantity * it.price), 0) } `}</p>
      </li>
    </StyledOrder>
  )
}

const StyledOrder = styled.ul`
  background-color: red;
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: nowrap column;

  li {
    background-color: green;
    width: 100%;
    display: flex;
    margin-top: 0.4rem;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;

    p {
      width: 100%;
      text-align: center;
    }
  }
`

export default Order