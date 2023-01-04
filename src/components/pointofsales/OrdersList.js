import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../state/StateProvider'

const OrdersList = () => {
  const state = useContext(StateContext)
  const { 
    products,
    orders, setOrders,
    setActiveOrder,
    setActiveModal,
    setSelectedOrder
  } = state

  const addNewOrder = () => {
    setOrders(orders => ([ ...orders, {
      id: orders.length,
      name: `Order ${ orders.length + 1 }`,
      status: 'OPEN',
      items: products.map(prd => ({
        id: prd.id,
        name: prd.name,
        quantity: 0,
        price: prd.price
      }))
    }]))

    setActiveOrder(orders.length)
  }

  const payOrder = orderId => {
    console.log(orders)

    const NO = orders.map(ord => {
      return ord.id !== orderId
        ? ord
        : ({
          ...ord,
          status: 'PAID'
        })
    })

    setOrders(NO)
  }

  const cancelOrder = orderId => {
    setSelectedOrder(orderId)
    setActiveModal('CANCEL_ORDER')
  }

  return (
    <StyledOrdersList>
      <li><button type='button' onClick={ addNewOrder }>New Order</button></li>

      {orders.map((order, i) => {
        return order.status === 'OPEN' ? (
          <li className='order' key={ `order_${order.id}` }>
            <p>{ order.name }</p>
            <p>{ order.status }</p>
            <p>{ `R ${ order.items.reduce((acc, it) => acc + (it.quantity * it.price), 0) }` }</p>
            <button type='button' onClick={() => setActiveOrder(order.id)}>Edit</button>
            <button type='button' onClick={() => cancelOrder(order.id)}>Cancel</button>
            <button type='button' onClick={() => payOrder(order.id)}>Pay</button>
          </li>
        ) : (
          <li className='order' key={ `order_${order.id}` }>
            <p>{ order.name }</p>
            <p>{ `R ${ order.items.reduce((acc, it) => acc + (it.quantity * it.price), 0) }` }</p>
            <button type='button' onClick={() => setOrders(orders.filter(i => i.id !== order.id))}>Cancel</button>
          </li>
        )
      })}
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
    margin-top: 0.4rem;
  }
`

export default OrdersList