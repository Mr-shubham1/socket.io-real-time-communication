import React, { useEffect } from "react";
import Sendinput from "./Sendinput";
import Chatbox from "./Chatbox";
import { useDispatch, useSelector } from "react-redux";
import {setSelecteduser} from "../redux/userSlice"
const Messagecontainer = () => {
  const {selecteduser,authuser} = useSelector(store=>store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    return ()=>{
      dispatch(setSelecteduser(null));
    }
  },[])
  return (
    
      selecteduser !== null?(<div className="w-[100%] flex flex-col ">
        <div className="bg-green-950/80 flex items-center gap-3 py-2 border-b-[1px] border-white/60 ">
          <div className="avatar avatar-online pl-4">
            <div className=" w-12 rounded-full">
              <img
                src={selecteduser?.profilephoto}
                alt="profile pic"
              />
            </div>
          </div>

          <div>
            <p className="text-white/80 font-semibold text-lg leading-tight">
              {selecteduser?.fullname}
            </p>
            <p className="text-gray-50/60 text-sm">Online</p>
          </div>
        </div>
        <Chatbox/>
        <Sendinput/>
        
    </div>):(
      <div className="w-[100%] flex flex-col items-center justify-center ">
        <img className="w-24 rounded-full cursor-pointer" src={authuser.profilePhoto} alt="profile pic" />
       <p className="text-2xl font-bold text-white">Hello, {authuser.fullName}</p>
        <p className="text-xl text-white">let's start conversation</p>
        
    </div>

    )
    
    
  );
};

export default Messagecontainer;
