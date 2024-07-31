import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'
import Create from '../components/Create'

const Routing = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
            <Route path='/create' element={<Create />}></Route>
        </Routes>
    </div>
  )
}

export default Routing