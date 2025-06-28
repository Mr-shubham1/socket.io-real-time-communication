import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setSelecteduser } from '../redux/userSlice';

const Otheruser = ({user}) => {
  const dispatch = useDispatch();
  const {selecteduser} = useSelector(store=>store.user);
  
  return (
    <div onClick={()=>{
      dispatch(setSelecteduser(user));
    }} className={`${selecteduser?._id === user?._id ? 'bg-white/40':''} flex items-center gap-3 py-2 border-b-[1px] border-white/60  hover:bg-white/40 rounded-lg transition-all duration-200 cursor-pointer`}>
      <div className="avatar avatar-online pl-2">
        <div className=" w-10 rounded-full">
          <img
            src={user?.profilephoto}
            alt="profile pic"
          />
        </div>
      </div>
     
      <div>
        <p className="text-black/80 font-semibold text-base leading-tight">{user?.fullname}</p>
        <p className="text-gray-50/60 text-sm">Online</p>
      </div>
      
    </div>
  )
}

export default Otheruser
