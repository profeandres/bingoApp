import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayOut = () => {
  return (
    <div className='app-container'>
        <Outlet/>    
    </div>
  )
}
