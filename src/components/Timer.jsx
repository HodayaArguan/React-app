import React from 'react'
import useTimer from '../hook/useTimer'

const Timer = () => {

    const {counter} = useTimer(2,3000)
  return (
    <>

    <h2>count is: {counter}</h2>

    </>
  )
}

export default Timer