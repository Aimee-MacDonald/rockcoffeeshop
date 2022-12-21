import React, { useContext } from 'react'

import { StateContext } from '../../../state/StateProvider'

const ProductList = () => {
  const state = useContext(StateContext)
  const { orders, setOrders, activeOrder } = state

  const addItem = item => {
    const newOrders = orders.map((order, i) => {
      if(i === activeOrder) {
        order.items.push({
          name: item
        })

        return order
      } else {
        return order
      }
    })

    setOrders(newOrders)
  }

  return (
    <ul>
      <li><button type='button' onClick={ () => addItem('Espresso') }>Espresso</button></li>
      <li><button type='button' onClick={ () => addItem('Africano') }>Africano</button></li>
      <li><button type='button' onClick={ () => addItem('Red Chino') }>Red Chino</button></li>
      <li><button type='button' onClick={ () => addItem('Cappuccino') }>Cappuccino</button></li>
      <li><button type='button' onClick={ () => addItem('Latte') }>Latte</button></li>
      <li><button type='button' onClick={ () => addItem('Kickass') }>Kickass</button></li>
    </ul>
  )
}

export default ProductList