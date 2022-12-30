import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../state/StateProvider'

const ModalLayer = () => {
  const { activeModal, setActiveModal } = useContext(StateContext)

  return (
    <StyledModalLayer activeModal={ activeModal }>
      <h1>Modal Layer</h1>
      <button type='button' onClick={ () => setActiveModal(false) }>Close</button>
    </StyledModalLayer>
  )
}

const StyledModalLayer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: ${ ({ activeModal }) => activeModal ? '100%' : '0' };
  overflow-y: ${ ({ activeModal }) => activeModal ? 'visible' : 'hidden' };
  background-color: ${ ({ activeModal }) => activeModal ? 'red' : 'transparent' };
  transition: 0.4s;
`

export default ModalLayer