import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
       
        
         <div className='flex gap-5 w-full h-12 '>
            <p className='font-semibold px-4 py-2 hover:rounded active:bg-green-200 '>Summary</p>
            <p className='font-semibold hover:rounded hover:bg-green-200 px-4 py-2'>Sales</p>
            <p className='font-semibold hover:rounded hover:bg-green-200 px-4 py-2'>Chats</p>
         </div>
    
    )
}

export default Navbar;
