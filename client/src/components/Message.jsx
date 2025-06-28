import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();
  const {authuser} = useSelector(store=>store.user)
  useEffect(()=>{
    scroll?.current?.scrollIntoView({behavior:"smooth"});
  },[message])
  
  
  return (
    <div ref={scroll}>
      <div className={` ${authuser?._id === message?.senderId ?'flex justify-end':'flex justify-start' }`}>
       
        <div className={` ${authuser?._id === message?.senderId ? 'bg-blue-500 text-white':'bg-white text-black'} max-w-[70%]  px-[10px] py-[6px] mb-3 mr-4 ml-4  rounded-lg rounded-br-none shadow-lg`}>
          {message?.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
