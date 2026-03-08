import React from 'react'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { change, selectVal } from '../state/viewMessage'



const Input = () => {

  const dispatch = useDispatch()
  const value = useSelector(selectVal)
  const handleOnBlur = (e) => {
    dispatch(change(e.target.value))
  }
  return (
    <>
      <h4>Insert input value</h4>
      <input onBlur={handleOnBlur}></input>
    </>
  )
}

export default Input