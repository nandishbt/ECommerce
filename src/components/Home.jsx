import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'
import axios from '../utils/axios'

const Home = () => {
  const[products,setproducts] = useContext(ProductContext)
 
  const [pr,setpr] = useState(null)

  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1])


  // const getfilteredProducts = async()=>{
  //  try {
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     setpr(data)
      
  //  } catch (error) {
  //   console.log(error);
  //  }
  // }

  useEffect(()=>{
     if(category=='undefined' || !category) 
      {setpr(products)} 

    if(category!='undefined'){
      setpr(products.filter(p=>p.category==category))
      
    } 
    
    
  },[products,category])



  return ( products?

    <div className='flex'>

    <Navbar />
    <div className='w-[80%] h-screen flex gap-5 p-10 flex-wrap overflow-auto'>
        {
          pr&&pr.map((item,i)=>{
            return <Card key={i} image = {item.image} title={item.title} id={item.id}/>
          })
        }
       
    </div>
    </div>
    :<Loading/ >
  )
}

export default Home