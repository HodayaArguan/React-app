import React from 'react'
import { useSelector } from 'react-redux'
import {  selectVal } from '../state/viewMessage'
const Message = () => {
  const value = useSelector(selectVal)
  return (
    <>
    <h1  >{value} </h1>
    </>
  )
}

export default Message