import React from 'react'
import Routing from './utils/Routing'

import { Link, useLocation } from 'react-router-dom'

const App = () => {

  const{search,pathname}=useLocation()

 
  return (
    <div>
    {(pathname!== '/' || search!='' )  &&     <Link to={'/'} className=' absolute left-[20%] top-5 px-4 py-1 border border-red-300 text-red-300 rounded text-xl font-semibold'>Home</Link>
  }
      <Routing />
    
    </div>
  )
}

export default App