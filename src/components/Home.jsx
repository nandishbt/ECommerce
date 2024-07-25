import React, { useContext } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
  const[products,setproducts] = useContext(ProductContext)

  return ( products?

    <div className='flex'>

    <Navbar />
    <div className='w-[80%] h-screen flex gap-5 p-10 flex-wrap overflow-auto'>
        {
          products.map((item,i)=>{
            return <Card key={i} image = {item.image} title={item.title} id={item.id}/>
          })
        }
       
    </div>
    </div>
    :<Loading/ >
  )
}

export default Home