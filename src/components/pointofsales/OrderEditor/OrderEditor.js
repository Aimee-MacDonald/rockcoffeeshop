import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../../state/StateProvider'

import ProductsList from './ProductsList'
import Order from './Order'

const OrderEditor = () => {
  const state = useContext(StateContext)
  const { orders, activeOrder, setActiveOrder } = state

  return (
    <StyledOrderEditor>
      <button type='button' onClick={ () => setActiveOrder(null) }>Back</button>
      <input id='name' placeholder='name' value={ orders[activeOrder].name } />

      <div id='orderEditorContainer'>
        <ProductsList/>
        <Order/>
      </div>
    </StyledOrderEditor>
  )
}

const StyledOrderEditor = styled.div`
  background-color: green;
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: nowrap column;

  #orderEditorContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: nowrap row;
  }
`

export default OrderEditor