import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../state/StateProvider'

const OrdersList = () => {
  const state = useContext(StateContext)
  const { 
    orders, setOrders,
    setActiveOrder
  } = state

  const newOrder = () => {
    setOrders(orders => ([ ...orders, {
      name: 'New Order',
      items: [{
        name: 'Item Name'
      }]
    } ]))
    setActiveOrder(orders.length)
  }

  return (
    <StyledOrdersList>
      <li><button type='button' onClick={ newOrder }>New Order</button></li>

      {orders.map((order, i) => (
        <li>
          <p>{ order.name }</p>
          <button type='button' onClick={() => setActiveOrder(i)}>Edit</button>
        </li>
      ))}
    </StyledOrdersList>
  )
}

const StyledOrdersList = styled.ul`
  background-color: green;
`

export default OrdersList