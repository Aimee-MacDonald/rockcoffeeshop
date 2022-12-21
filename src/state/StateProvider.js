import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ orders, setOrders ] = useState([])
  const [ activeOrder, setActiveOrder ] = useState(null)

  const state = {
    orders, setOrders,
    activeOrder, setActiveOrder
  }
  
  return (
    <StateContext.Provider value={state}>
      { children }
    </StateContext.Provider>
  )
}

const StateContext = createContext(null)
export { StateContext }