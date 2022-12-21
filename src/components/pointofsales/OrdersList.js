import React, { useState } from 'react'
import styled from 'styled-components'

const OrdersList = ({ newOrder }) => {
  const [ orders, setOrders ] = useState(['Order One'])

  return (
    <StyledOrdersList>
      <li><button type='button' onClick={ newOrder }>New Order</button></li>

      {orders.map(order => <li>{ order }</li>)}
    </StyledOrdersList>
  )
}

const StyledOrdersList = styled.ul`
  background-color: green;
`

export default OrdersList