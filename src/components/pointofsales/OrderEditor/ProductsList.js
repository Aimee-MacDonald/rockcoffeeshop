import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../../state/StateProvider'

const ProductList = () => {
  const state = useContext(StateContext)
  const { products, orders, setOrders, activeOrder } = state

  const addItem = item => {
    const ords = orders.map(ord => {
      return activeOrder !== ord.id
        ? ord
        : ({
          ...ord,
          items: ord.items.map(it => {
            return item !== it.id
              ? it
              : ({
                ...it,
                quantity: it.quantity + 1
              })
          })
        })
    })

    setOrders(ords)
  }

  return (
    <StyledProductList>
      {products.map(product => (
        <li>
          <button type='button' onClick={ () => addItem(product.id) }>
            <h1>{ product.name }</h1>
            <h2>{ `R ${product.price}` }</h2>
          </button>
        </li>
      ))}
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