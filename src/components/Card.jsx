import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({image,title,id}) => {
  return (
    <Link to={`/details/${id}`} className='w-72 min-h-[36vh]  p-3 rounded-sm m-3 shadow-xl'>
        <div className='w-full h-[80%] p-7'>
            <img className='w-full h-full object-cover object-center' src={image} alt="" />
        </div>
        <hr className='mb-3'></hr>

        <p className='font-medium hover:text-blue-500 hover:font-semibold hover:cursor-pointer'>{title}</p>


    </Link>
  )
}

export default Card