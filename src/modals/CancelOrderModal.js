import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../state/StateProvider'

const CancelOrderModal = () => {
  const {
    setActiveModal,
    orders, setOrders,
    selectedOrder
  } = useContext(StateContext)

  const removeOrder = () => {
    if(selectedOrder !== null) {
      setOrders(orders.filter(i => i.id !== selectedOrder))

      setActiveModal(null)
    }
  }

  return (
    <StyledCancelOrderModal>
      <h1>CancelOrderModal</h1>
      <button onClick={() => setActiveModal(null)}>Cancel</button>
      <button onClick={ removeOrder }>Remove Order</button>
    </StyledCancelOrderModal>
  )
}

const StyledCancelOrderModal = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default CancelOrderModal