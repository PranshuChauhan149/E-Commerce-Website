import React from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  let dispatch = useDispatch();

  const items = useSelector(state=>state.cart)
  

  return (

    <div className='min-h-screen flex flex-col items-center w-full p-4 bg-gray-100 gap-4'>
      {items.map((item,index)=>(
       
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center p-4 gap-4'>
   
        <div key={index} className='w-full md:w-1/3 bg-amber-400 h-70 flex justify-center items-center rounded-lg'>
          <img src={item.image} alt='Product' className='w-full h-full object-center rounded-lg' />
        </div>

    
        <div className='flex-1 flex flex-col justify-around text-center md:text-left'>
          <p className='text-lg font-semibold'>{item.name}</p>
          <p className='text-gray-600'>${item.price}</p>
        </div>

       
        <div className='flex items-center gap-2'>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'>Remove</button>
          <RiDeleteBin5Fill className='text-red-500 text-2xl cursor-pointer hover:text-red-700' />
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cart;