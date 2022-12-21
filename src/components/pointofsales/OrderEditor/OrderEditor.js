import React from 'react'

import ProductsList from './ProductsList'
import OrderList from './OrderList'

const OrderEditor = ({ back }) => (
  <div>
    <button type='button' onClick={ back }>Back</button>
    <ProductsList/>
    <OrderList/>
  </div>
)

export default OrderEditor