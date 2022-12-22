import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../state/StateProvider'

import OrderEditor from '../components/pointofsales/OrderEditor/OrderEditor'
import OrdersList from '../components/pointofsales/OrdersList'

const PointOfSales = () => {
  const state = useContext(StateContext)
  const { activeOrder } = state

  return (
    <StyledPointOfSales>
      {activeOrder !== null && <OrderEditor />}
      {activeOrder === null && <OrdersList />}
    </StyledPointOfSales>
  )
}

const StyledPointOfSales = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center center;
`

export default PointOfSales