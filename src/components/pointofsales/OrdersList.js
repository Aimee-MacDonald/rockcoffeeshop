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
      name: `Order ${ orders.length + 1 }`,
      items: []
    } ]))
    setActiveOrder(orders.length)
  }

  return (
    <StyledOrdersList>
      <li><button type='button' onClick={ newOrder }>New Order</button></li>

      {orders.map((order, i) => (
        <li className='order'>
          <p>{ order.name }</p>
          <p>{ `R ${50}` }</p>
          <button type='button' onClick={() => setActiveOrder(i)}>Edit</button>
        </li>
      ))}
    </StyledOrdersList>
  )
}

const StyledOrdersList = styled.ul`
  background-color: green;
  width: 40%;
  height: 80%;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;

  .order {
    width: 100%;
    background-color: red;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.4rem 0;
  }
`

export default OrdersList