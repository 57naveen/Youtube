import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div>

   <Head />
    <div className='flex h-screen'>
        <SideBar/>
        <div className='flex-1 overflow-y-auto h-screen p-4'>
          <Outlet />
        </div>
        
    </div>
     </div>
  )
}

export default Body

