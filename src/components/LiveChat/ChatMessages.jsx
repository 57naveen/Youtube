import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    
    <div className='flex items-center hover:bg-gray-200 p-2'>
      
         <img className="h-8" src="/image/avatar.png" />
         <div>
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
         </div>
    </div>
  )
}

export default ChatMessages