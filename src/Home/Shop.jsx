import React, { useState } from "react";
import { FaShopify } from "react-icons/fa";
import Catagory from "../components/Catagory";
import {Catdata} from "../assets/hero";
import Products from "../components/Products";

import {dummydata} from '../assets/dummydata'
const Shop = () => {
  const [cat, setcat] = useState(Catdata);

  // function dividecat(cat){
  //   const updated =

  // }

  const [allcate,setallcat] = useState("All");
   const [cate,setcategory] = useState(dummydata);


   
     const filterfunction=(cateee)=>{
      if(cateee=='All'){
        setcategory(dummydata);
      }
      else{

        const updatedData = dummydata.filter((item)=>(item.category==cateee));
    
        setcategory(updatedData);
      }
     }


  return (
    <div className="flex flex-col gap-16 justify-center items-center mt-8">
      <div className="flex gap-2">
        <h1 className="text-4xl font-extrabold font-serif">Shop</h1>
        <FaShopify className="text-4xl" />
      </div>

      <div className='w-[90%]  flex flex-wrap mt-1 gap-8 justify-center items-center' >
{/* {if(allcate=='All'){

}} */}
{Catdata.map((item,index)=>(
  <Catagory key={index} category={item.category} image={item.image} filterfunction={filterfunction} />
))}
  
  </div>

  <div className='flex flex-wrap justify-center items-center gap-8 '>
            {cate.map((item,index)=>(
              <Products key={index} name={item.name} price={item.price} image={item.image} id={item.id} />
            ))}
          </div>
    </div>
  );
};

export default Shop;
