import React from 'react'

const Otheruser = () => {
  return (
    <div className="flex items-center gap-3 py-2 border-b-[1px] border-white/60  hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer">
      <div className="avatar avatar-online pl-2">
        <div className=" w-10 rounded-full">
          <img
            src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            alt="profile pic"
          />
        </div>
      </div>
     
      <div>
        <p className="text-black/80 font-semibold text-base leading-tight">kirat patel</p>
        <p className="text-gray-50/60 text-sm">Online</p>
      </div>
    </div>
  )
}

export default Otheruser
