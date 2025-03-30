import React, { useState } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCart } from '../redux/CartSlice';
import emptycart from '../assets/emptycart.png';
const Cart = () => {
  let dispatch = useDispatch();

  const [len, setlen] = useState(false);
  const items = useSelector(state => state.cart);
  console.log(items);
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
 

  return (
    <div className='min-h-screen flex flex-col items-center w-full p-4 bg-gray-100 gap-4'>
      {items.length === 0 ? (
       <div className='min-h-screen flex flex-col items-center w-full justify-center p-4 bg-gray-100 gap-1.5'>
        <img src={emptycart} className='w-[50%] h-[50%] object-center' alt="" />
        <p className='font-extrabold text-2xl font-serif'>Empty Cart</p>
       </div>
      ) : (
        items.map((item, index) => (
          <div key={item.id} className='w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center p-4 gap-4'>
            <div className='w-full md:w-1/3 bg-amber-400 h-70 flex justify-center items-center rounded-lg'>
              <img src={item.image} alt='Product' className='w-full h-full object-center rounded-lg' />
            </div>

            <div className='flex-1 flex flex-col justify-around text-center md:text-left'>
              <p className='text-lg font-semibold'>{item.name}</p>
              <p className='text-gray-600'>${item.price}</p>
            </div>

            <div className='flex items-center gap-2'>
              <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
                onClick={() => { dispatch(RemoveCart( item.id )) }}>
                Remove
              </button>
              <RiDeleteBin5Fill className='text-red-500 text-2xl cursor-pointer hover:text-red-700'
                onClick={() => { dispatch(RemoveCart( item.id )) }} />
            </div>
          </div>

          
        ))
      )}
      {items.length>0 &&(
         <div className='w-[50%] flex flex-col  justify-center items-center gap-2.5'  >
              <p className='font-mono font-extrabold text-2xl text-gray-600'>Total items:<span className='font-bold text-3xl text-black'>{items.length}</span> </p>
              <p className='font-mono font-extrabold text-2xl text-gray-600'>Price:<span className='font-bold text-3xl text-black'>{totalPrice}</span> </p>
             

            </div>
      )}
    </div>
  );
};

export default Cart;
