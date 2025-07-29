import React from 'react'

const Comment = ({data}) => {

    const {name,text} = data
  return (
    <div className='flex shadow-sm   bg-gray-100'>
            <img className='h-12 w-12' src='/image/avatar.png' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
    </div>
  )
}

export default Comment