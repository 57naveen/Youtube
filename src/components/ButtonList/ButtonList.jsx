import React from 'react'
import Button from './Button'

const List = ["All","Music","Electric cars","News","Live","Gadgets","Mixes","Gaming","Tamil Cinema","Property","Personal Finance"]

const ButtonList = () => {
  return (
    <div className='flex'>
     {List.map((Lists,index)=>( 
       <Button key={index} name={Lists} />
     ))}
    </div>
  )
}

export default ButtonList