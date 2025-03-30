import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link,NavLink } from 'react-router-dom'

const Navbar2 = () => {

const items = useSelector(state=>state)
const len = (items.cart.length);
  return (
    <div className=' bg-gray-600 h-[30px] text-white w-full flex items-center justify-center '>
      <ul className='flex justify-center items-center gap-4 h-full'>
       <NavLink to="/"><li className='font-bold text-white  hover:cursor-pointer hover:text-gray-900'>Home</li>
       </NavLink>
       <NavLink to="/shop"> <li className='font-bold text-white  hover:cursor-pointer hover:text-gray-900'>Shop</li>
       </NavLink>
       <NavLink to="/cart" > <li className='font-bold text-white  hover:cursor-pointer hover:text-gray-900'>Cart</li>
      </NavLink>
      <NavLink to="/contect"> <li className='font-bold text-white  hover:cursor-pointer hover:text-gray-900'>Contect</li>
      </NavLink>
      </ul>
      
    </div>
  )
}

export default Navbar2
