import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex h-screen'>
        <SideBar/>
        <div className='flex-1 overflow-y-auto h-screen p-4'>
          <Outlet />
        </div>
        
    </div>
  )
}

export default Body

