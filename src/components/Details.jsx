import React, {  useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Loading from './Loading'
import  axios  from '../utils/axios'
import { ProductContext } from '../utils/Context'

const Details = () => {
 const navigate =  useNavigate()

  

    // const [Myproduct,setMyproduct] = useState(null)
    const [products,setproducts] = useContext(ProductContext)

  
    const{id} = useParams()

    // const getproduct = async()=>{
    //  try {
    //   const {data} = await axios.get(`/products/${id}`)
    //   setMyproduct(data)
    //  } catch (error) {
    //   console.error(error)
    //  }
    // }

    // useEffect(()=>{
    //   setMyproduct(products.find(product => product.id === parseInt(id)))
    // },[])
   
   const Myproduct = products.find(product => product.id == id)

   const deleteHandler = (id)=>{
    const updatedproducts = products.filter(p=>p.id != id)
    setproducts(updatedproducts)
    localStorage.setItem('product', JSON.stringify(updatedproducts))
    navigate(-1)

   }
     
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

              <Link to={`/edit/${id}`} className='px-4 py-1 border border-blue-300 text-blue-300 rounded text-xl font-semibold mr-5'> Edit </Link>
              <Link  onClick={()=>deleteHandler(Myproduct.id)} className='px-4 py-1 border border-red-300 text-red-300 rounded text-xl font-semibold'> Delete </Link>

            </div>


        </div>
 

:<Loading />
  )
}

export default Details