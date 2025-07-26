import React from 'react'


const Head = () => {
  return (
    <div className='grid grid-flow-col shadow-lg p-5 '>

      <div className='flex col-span-1 '>

        <img className='h-8' alt='hambuger-Menu' src='/image/menu.png' />
        <div className='flex px-8'>
      <img className='h-8 ' alt='youtubelogo' src='/image/youtube.png' />
      <h3 className='mt-1 px-2 font-bold'>Youtube</h3>
        </div>
        

      </div>

      <div className='flex col-span-10 px-50'>
        <input className='h-8 w-90 border border-gray-400 rounded-l-full' type='text' />
        <button className='h-8 border px-3 border-gray-400 rounded-r-full bg-gray-200'><img className='h-4' src='/image/loupe.png'/></button>
      </div>

      <div className='col-span-1'> 
        <img className='h-8' src='/image/avatar.png' />
      </div>

    </div>
  )
}

export default Head