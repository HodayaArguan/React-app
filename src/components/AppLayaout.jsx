import React from 'react'
import Header from './Header'
// import { Outlet } from 'react-router'
import { Outlet } from 'react-router-dom';

export const AppLayaout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
