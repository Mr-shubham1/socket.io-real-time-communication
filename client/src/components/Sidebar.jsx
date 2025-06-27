import React from 'react'
import { GoSearch } from "react-icons/go";
import Otherusers from './Otherusers';
const Sidebar = () => {
  return (
    <div className=' pt-4 border-r-[1.2px] border-r-white/50 pr-2 pl-2'>
      <form action="">
        <div className= ' mb-3 flex items-center bg-white/10 rounded-full border-[1px]  border-white/80'>
            <input type="text"  placeholder='Search'  className= 'placeholder:text-black bg-white/5 outline-none pl-4 h-8 w-40 rounded-l-full focus-visible:ring-2' />
            <button className='bg-white/40 h-8 w-8 pl-2 rounded-r-full'>
                <GoSearch/>
            </button>
        </div>
        <hr className='border-white/40' />
      </form>
      <Otherusers/>
    </div>
  )
}

export default Sidebar
