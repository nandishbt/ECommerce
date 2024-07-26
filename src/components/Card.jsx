import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({image,title,id}) => {
  return (
    <Link to={`/details/${id}`} className='w-80 h-[38vh]  p-6 rounded-sm m-1 shadow-xl'>
        <div className='w-full h-[72%] p-7'>
            <img className='w-full h-full object-contain object-center' src={image} alt="" />
        </div>
        <hr className='mb-3'></hr>

        <p className='font-medium hover:text-blue-500 hover:font-semibold hover:cursor-pointer'>{title}</p>


    </Link>
  )
}

export default Card