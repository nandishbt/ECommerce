import React, { useContext } from 'react'
import { Link ,NavLink} from 'react-router-dom'

import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Navbar = () => {

  const [products,setproducts]= useContext(ProductContext)

  let uniqueProduct = products && products.reduce((acc,p)=>[...acc,p.category],[])

  uniqueProduct = [... new Set(uniqueProduct)]

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},.5)`
  }


  

  return ( uniqueProduct?
    <div className='w-[20%]  h-screen bg-zinc-50 flex flex-col  p-10 '>

        <NavLink to={'/create'} className={'text-blue-400 text-xl w-[80%] ml-[10%] text-center hover:text-blue-600 hover:cursor-pointer bg-white border border-blue-300 p-3 px-5 my-10  '} >ADD PRODUCT</NavLink>

        <hr className='w-[80%] mb-5'></hr>

        <h1 className='font-semibold text-xl mb-5 '>CATEGORY FILTER</h1>

        <div className='' >
        <Link to={`/`}> <li className=' mb-3 flex items-center gap-3 text-xl font-semibold'>  <span style={{backgroundColor:color()}}  className='inline-block w-5 h-5 rounded-full '></span>All</li></Link>
        {uniqueProduct.map((pr,i)=>{
          return<Link key={i} to={`/?category=${pr}`}> <li className=' mb-3 flex items-center gap-3 text-xl font-semibold'>  <span style={{backgroundColor:color()}}  className='inline-block w-5 h-5 rounded-full '></span>{pr}</li></Link>  
 
        })}
        
            
        </div>

      
       



    </div>
    :<Loading />
  )
}

export default Navbar