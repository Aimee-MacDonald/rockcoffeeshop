import React, { useState } from 'react'

const OrderList = () => {
  const [ orders, setOrders ] = useState(['Product One'])

  return (
    <ul>
      {orders.map(order => <h1>{ order }</h1>)}
    </ul>
  )
}

export default OrderList