import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './state/store'
import Input from './components/Input'
import Message from './components/Message'
function App() {


  return (
    <>
      <Provider store={store}>
        <Input></Input>
        <Message></Message>
      </Provider>
    </>
  )
}

export default App
