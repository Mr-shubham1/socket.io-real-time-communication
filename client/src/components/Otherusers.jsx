import React from "react";
import Otheruser from "./Otheruser";
import useGetotherusers from "../hooks/useGetotherusers";
import {  useSelector } from "react-redux";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom"


const Otherusers = () => {
  useGetotherusers();
  
  const navigate = useNavigate();
  const logouthandler = async ()=>{
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");
      toast.success(res.data.message);
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  const { otherusers } = useSelector((store) => store.user);
  if (!otherusers) return;
  // console.log(otherusers);
  return (
    <div className="h-[88%] relative">
      <div className="overflow-hidden overflow-y-auto h-[90%]  scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent scroll-smooth">
        {otherusers?.map((user) => {
          return <Otheruser key={user._id} user={user} />;
        })}
      </div>
      <button onClick={logouthandler}  className="absolute bottom-2 left-2 px-4  bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-200">
        Logout
      </button>
    </div>
  );
};

export default Otherusers;
