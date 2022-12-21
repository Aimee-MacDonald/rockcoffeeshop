import React from 'react'

const ProductList = () => {
  const addItem = item => console.log(`Add Item: ${item}`)

  return (
    <ul>
      <li><button type='button' onClick={ () => addItem('Espresso') }>Espresso</button></li>
      <li><button type='button' onClick={ () => addItem('Africano') }>Africano</button></li>
      <li><button type='button' onClick={ () => addItem('Red Chino') }>Red Chino</button></li>
      <li><button type='button' onClick={ () => addItem('Cappuccino') }>Cappuccino</button></li>
      <li><button type='button' onClick={ () => addItem('Latte') }>Latte</button></li>
      <li><button type='button' onClick={ () => addItem('Kickass') }>Kickass</button></li>
    </ul>
  )
}

export default ProductList