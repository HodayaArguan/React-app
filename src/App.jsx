import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MouseTracker from './components/MouseTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MouseTracker/>
    </>
  )
}

export default App
