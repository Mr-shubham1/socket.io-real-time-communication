import React from 'react'
import Sidebar from './Sidebar'
import Messagecontainer from './Messagecontainer'

const Homepage = () => {
  return (
    <div className=' flex mx-auto w-[90%] max-w-[700px]  sm:h-[450px] md:h-[500px] bg-white/10 backdrop-blur-sm border-white/20 rounded-xl shadow-xl'>
      <Sidebar/>
      <Messagecontainer/>
    </div>
  )
}

export default Homepage
