import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../../../state/StateProvider'

import ProductsList from './ProductsList'
import Order from './Order'

const OrderEditor = () => {
  const state = useContext(StateContext)
  const { orders, setOrders, activeOrder, setActiveOrder } = state

  return (
    <StyledOrderEditor>
      <input
        id='name'
        placeholder='name'
        value={ orders[activeOrder].name }
        onChange={ e => setOrders(orders => orders.map(ord => ord.id !== activeOrder ? ord : ({ ...ord, name: e.target.value }))) }
      />

      <div id='orderEditorContainer'>
        <ProductsList/>
        <Order/>
      </div>

      <button id='backButton' type='button' onClick={ () => setActiveOrder(null) }>Back</button>
    </StyledOrderEditor>
  )
}

const StyledOrderEditor = styled.div`
  background-color: green;
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: nowrap column;
  align-items: flex-start;

  #orderEditorContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: nowrap row;
  }

  #backButton {
    margin: 1rem auto;
    padding: 1.5rem 6rem;
  }
`

export default OrderEditor