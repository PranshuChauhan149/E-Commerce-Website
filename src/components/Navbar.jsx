import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";




const Navbar = () => {
  const navigate = useNavigate();


  let dispatch = useDispatch();

  const items = useSelector(state=>state)
  
const len = (items.cart.length);





  return (
    <div className="bg-gray-800 h-[80px] w-full text-white flex justify-between px-4 items-center">
      <div className="flex items-center gap-1  justify-center">
      <p className="text-2xl">V-Shop</p>
      <FiShoppingBag className="text-2xl font-bold"/>

      </div>
      <div className="flex w-[50%] h-[60%] bg-white px-4 p-2 rounded-2xl" >
        <input type="text" placeholder="Search items."  className="bg-white w-full h-full border-none outline-none text-black"  />
        <CiSearch className="bg-white  h-full w-[20px] font-bold text-black cursor-pointer"/>

      </div>
      <div className="relative h-[50%] flex items-center justify-between">
        <span className="absolute top-[-9px] right-[-5px]">{len}</span>
        <FiShoppingCart className="text-3xl font-bold"   onClick={()=>navigate("/cart")} />
      </div>
    </div>
  );
};

export default Navbar;
