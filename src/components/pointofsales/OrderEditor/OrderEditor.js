import React, { useContext } from 'react'

import { StateContext } from '../../../state/StateProvider'

import ProductsList from './ProductsList'
import Order from './Order'

const OrderEditor = () => {
  const state = useContext(StateContext)
  const { setActiveOrder } = state

  return (
    <div>
      <button type='button' onClick={ () => setActiveOrder(null) }>Back</button>
      <ProductsList/>
      <Order/>
    </div>
  )
}

export default OrderEditor