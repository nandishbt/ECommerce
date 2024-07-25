import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'

const Routing = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
    </div>
  )
}

export default Routing