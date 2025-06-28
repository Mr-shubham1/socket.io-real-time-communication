import axios from "axios";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
const Sendinput = () => {
  const [input,setInput] = useState("");
  const {selecteduser} = useSelector(store=>store.user);
  const {messages} = useSelector(store=>store.message);
  const dispatch = useDispatch();
  const submithandler = async (e)=>{
    e.preventDefault();
    try {
      // console.log(selecteduser?._id);
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selecteduser?._id}`,{message:input},
        {
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        }
      );
      // console.log(res);
      // store it in redux store
      dispatch(setMessages([...messages,res?.data?.newMessage]));
      setInput("");
      
    } catch (error) {
      console.log(error);
    }
  }
  return ( 
    <div>
      <form action="" onSubmit={submithandler}>
        <div className="relative">
          <input placeholder="Message" value={input} onChange={(e)=>{
            setInput(e.target.value);
          }} className="block mb-2 mx-auto pl-3 text-white font-light placeholder:text-white w-[95%] h-9 rounded-lg bg-gray-700 outline-none " type="text" />
          <button type="submit" className="absolute top-[8px] right-[20px] text-gray-200 cursor-pointer">
            <IoSendSharp className="h-5 w-5" />
          </button >
        </div>
      </form>
    </div>
  );
};

export default Sendinput;
