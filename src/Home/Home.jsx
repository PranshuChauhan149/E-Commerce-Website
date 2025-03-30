import React, { useState } from 'react'

import HeroImg from '../components/HeroImg'
import Catagory from '../components/Catagory'

import {Catdata} from '../assets/hero'
import Products from '../components/Products'

import {dummydata} from '../assets/dummydata'

const Home = () => {

  const [cate,setcategory] = useState(dummydata)

  const filterfunction=(cateee)=>{
    const updatedData = dummydata.filter((item)=>(item.category==cateee));

    setcategory(updatedData);
  }


  return (
    <div className='w-full flex flex-col justify-center items-center'>
     
      <HeroImg/>   
      

      <div className='w-[90%]  flex flex-wrap mt-4 gap-8 justify-center items-center' >

      {Catdata.slice(0,5).map((item,index)=>(
        <Catagory key={index} category={item.category} image={item.image} filterfunction={filterfunction} />
      ))}
        
        </div> 

        <div className='flex flex-col justify-center items-center gap-8 mt-8 mb-8 w-[90%]'>
          <h2 className='font-extrabold text-4xl'>Trending Products</h2>

          <div className='flex flex-wrap justify-center items-center gap-8 '>
            {cate.slice(0,7).map((item,index)=>(
              <Products key={index} name={item.name} price={item.price} image={item.image} id={item.id}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home
