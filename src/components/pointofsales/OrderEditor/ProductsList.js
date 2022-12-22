import React, { useContext } from 'react'
import styled from 'styled-components'

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
    <StyledProductList>
      <li><button type='button' onClick={ () => addItem('Espresso') }>Espresso</button></li>
      <li><button type='button' onClick={ () => addItem('Africano') }>Africano</button></li>
      <li><button type='button' onClick={ () => addItem('Red Chino') }>Red Chino</button></li>
      <li><button type='button' onClick={ () => addItem('Cappuccino') }>Cappuccino</button></li>
      <li><button type='button' onClick={ () => addItem('Latte') }>Latte</button></li>
      <li><button type='button' onClick={ () => addItem('Kickass') }>Kickass</button></li>
    </StyledProductList>
  )
}

const StyledProductList = styled.ul`
  background-color: red;
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;

    button {
      width: 80%;
      height: 80%;
    }
  }
`

export default ProductList