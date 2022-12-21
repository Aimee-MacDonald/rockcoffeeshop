import React, { useContext } from 'react'

import { StateContext } from '../../../state/StateProvider'

const Order = () => {
  const state = useContext(StateContext)
  const { orders, activeOrder } = state

  return (
    <ul>
      {orders[activeOrder].items.map(orderItem => <li>{ orderItem.name }</li>)}
    </ul>
  )
}

export default Order