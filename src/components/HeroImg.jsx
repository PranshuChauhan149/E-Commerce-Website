import React from 'react'
import image from '../assets/bg0.gif';
const HeroImg = () => {
  return (
    <div className=' flex items-center justify-center p-4' >
      <div className='w-full h-full bg-amber-100 rounded-lg shadow-lg shadow-black'>

      <img src={image} className='w-full h-full rounded-lg' alt="" />
      </div>
      
    </div>
  )
}

export default HeroImg
