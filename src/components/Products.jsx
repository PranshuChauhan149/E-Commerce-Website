import React from 'react'
import image from '../assets/image1.jpg'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../redux/CartSlice';
const Products = ({name,image,price,id}) => {


  let dispatch = useDispatch();


  return (
    <div className="w-full max-w-[300px] sm:max-w-[260px] h-auto px-5 py-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-300 flex flex-col items-center">
    <div className="w-full h-56 sm:h-52 bg-gray-100 rounded-lg overflow-hidden">
      <img src={image} className="w-full h-full object-center" alt={name} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center truncate w-full px-2">{name}</h3>
    <p className="text-md text-gray-600 text-center font-medium">Rs {price}/-</p>
    <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition hover:cursor-pointer"  onClick={()=>{
      dispatch(AddtoCart({id:id,name:name,image:image,price:price}))
      alert("Product Added successfully..")
    }} >Add to Cart</button>
  </div>
  )
}

export default Products
