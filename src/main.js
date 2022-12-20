import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)

const MainComponent = () => (
  <div>
    <h1>Rock Coffee</h1>
  </div>
)

root.render(<MainComponent />)