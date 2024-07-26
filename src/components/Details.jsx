import React, {  useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Loading from './Loading'
import  axios  from '../utils/axios'

const Details = () => {

  

    const [Myproduct,setMyproduct] = useState(null)
  
    const{id} = useParams()

    const getproduct = async()=>{
     try {
      const {data} = await axios.get(`/products/${id}`)
      setMyproduct(data)
     } catch (error) {
      console.error(error)
     }
    }

    useEffect(()=>{
      getproduct()
    },[])
   
  //  const Myproduct = products.find(product => product.id === parseInt(id))
     
  return (Myproduct?
    
    <div className='w-[80vw] h-screen m-auto   flex items-center justify-center gap-20 '>

      

            <div className='w-[20%] h-[40%] '>
                <img className='w-full h-full object-center object-contain ' src={Myproduct.image}alt="" />
            </div>
            <div className='w-[40%]  ' >

                <h1 className=' text-3xl font-bold mb-5'>{Myproduct.title}</h1>
                <h2 className='mb-5 opacity-50'>{Myproduct.category}</h2>
                <h1 className='text-xl text-red-400 mb-5  '>{Myproduct.price}</h1>
                <h1 className='mb-5 font-semibold' >{Myproduct.description}</h1>

              <Link to={'/'} className='px-4 py-1 border border-blue-300 text-blue-300 rounded text-xl font-semibold mr-5'> Edit </Link>
              <Link to={'/'} className='px-4 py-1 border border-red-300 text-red-300 rounded text-xl font-semibold'> Delete </Link>

            </div>


        </div>
 

:<Loading />
  )
}

export default Details