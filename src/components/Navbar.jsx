import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[20%]  h-screen bg-zinc-50 flex flex-col  p-10 '>

        <NavLink to={'/addproduct'} className={'text-blue-400 text-xl w-[80%] ml-[10%] text-center hover:text-blue-600 hover:cursor-pointer bg-white border border-blue-300 p-3 px-5 my-10  '} >ADD PRODUCT</NavLink>

        <hr className='w-[80%] mb-5'></hr>

        <h1 className='font-semibold text-xl mb-5 '>CATEGORY FILTER</h1>

        <ul className=''>
      <NavLink to={'/cat1'}> <li className=' mb-3 flex items-center gap-3 text-xl font-semibold'>  <span className='inline-block w-5 h-5 rounded-full  bg-blue-200'></span>cat1</li></NavLink>  
        <li className=' mb-3 flex items-center gap-3 text-xl font-semibold'>  <span className='inline-block w-5 h-5 rounded-full  bg-red-200'></span>cat2</li>
        <li className='  flex items-center gap-3 text-xl font-semibold'>  <span className='inline-block w-5 h-5 rounded-full  bg-yellow-200'></span>cat3</li>
            
        </ul>

      
       



    </div>
  )
}

export default Navbar