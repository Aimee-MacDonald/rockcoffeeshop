import React, { useState } from 'react'
import styled from 'styled-components'

import OrderEditor from '../components/pointofsales/OrderEditor/OrderEditor'
import OrdersList from '../components/pointofsales/OrdersList'

const PointOfSales = () => {
  const [ editing, setEditing ] = useState(false)

  const newOrder = () => {
    setEditing(true)
  }

  const back = () => {
    setEditing(false)
  }

  return (
    <StyledPointOfSales>
      {editing && <OrderEditor back={ back }/>}
      {!editing && <OrdersList newOrder={ newOrder }/>}
    </StyledPointOfSales>
  )
}

const StyledPointOfSales = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`

export default PointOfSales