import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ orders, setOrders ] = useState([])
  const [ activeOrder, setActiveOrder ] = useState(null)

  const products = [{
    id: 0,
    name: 'Espresso',
    price: 30
  }, {
    id: 1,
    name: 'Afrikano',
    price: 30
  }, {
    id: 2,
    name: 'Red Chino',
    price: 40
  }, {
    id: 3,
    name: 'Cappuccino',
    price: 45
  }, {
    id: 4,
    name: 'Latte',
    price: 45
  }, {
    id: 5,
    name: 'Kickass',
    price: 75
  }]

  const state = {
    products,
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