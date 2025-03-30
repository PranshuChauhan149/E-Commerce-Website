import React from 'react'
import image from '../assets/beauty.jpg'
const Catagory = ({category,image,filterfunction}) => {
  return (
    <div  className=' h-[150px] rounded-lg flex flex-col  items-center gap-3 w-[130px] hover:shadow-lg shadow-black' onClick={()=>{
      filterfunction(category)
    }}>
      <div className='w-full h-[80%]  rounded-lg '>
        <img src={image} className=' w-full h-full rounded-lg' alt="" />
      </div>
      <p className='text-sm font-serif '>{category}</p>
    </div>
  )
}

export default Catagory
