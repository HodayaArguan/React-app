import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PurimEventsManager from './components/PurimEventsManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <PurimEventsManager/>
    </>
  )
}

export default App
