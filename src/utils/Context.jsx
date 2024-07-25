import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {

    const [products,setproducts] = useState()

    const getproducts = async() =>{
        try{
            const {data} = await axios.get('/products')
            setproducts(data)

        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
            getproducts()
    },[])


  return (
    <ProductContext.Provider value={[products,setproducts]}>{props.children}</ProductContext.Provider>
  )
}

export default Context