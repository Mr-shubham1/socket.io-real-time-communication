import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"


const Signup = () => {
  
  const [input,setInput] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const navigate = useNavigate();

  function onchangehandler(e){
     setInput({...input,[e.target.name]:e.target.value})
  }
  function oncheckboxclick(e){
    setInput({...input,gender:e.target.value});  
  }

  async function onsubmithandler(e){
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/register",
        input,
        {
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true
        }
        
      );
      // console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login");
      }

    } catch (error) {
      console.log("catch error in on submithandler :",error);
      toast.error(error.response.data.message);
    }
    setInput({
      fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
    })
  }
  
  return (
    <div>
      <div className=" p-6 md:w-96 w-80 mx-auto  rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
        <h1 className="text-center text-3xl font-semibold text-white">
          Sign Up
        </h1>
        <form action="" onSubmit={onsubmithandler}>
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80 ">
              Full Name
            </label>
            <input
              name="fullname"
              value={input.fullname}
              onChange={onchangehandler}
              type="text"
              placeholder="Enter your full name"
              className="h-8 px-3 rounded-md bg-white/20  placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-black/80 font-medium"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80 ">
              Username
            </label>
            <input
              name="username"
              onChange={onchangehandler}
              value={input.username}
              type="text"
              placeholder="Enter your username"
              className="h-8 px-3 rounded-md bg-white/20  placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-black/80 font-medium"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80  ">
              Password
            </label>
            <input
              name="password"
              value={input.password}
              onChange={onchangehandler}

              type="password"
              placeholder="Enter Password"
              className="h-8 px-3 rounded-md bg-white/20  placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-black/80 font-medium"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80 ">
              Confirm Password
            </label>
            <input
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={onchangehandler}
              type="password"
              placeholder="Enter Password again"
              className="h-8 px-3 rounded-md bg-white/20  placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-black/80 font-medium"
            />
          </div>
          <div className="mt-3 flex gap-8">
            <div className="flex items-center">
              <p className="text-black/80 text-sm font-medium">Male</p>
              <input value={"male"}
              onChange={oncheckboxclick}
              checked={input.gender === "male"}
              type="radio"
              name="radio-2"
              className="mx-2 radio radio-primary bg-white/50" />
            </div>
            <div className="flex items-center">
              <p className="text-black/80 text-sm font-medium">Female</p>
              <input value={"female"}
              onChange={oncheckboxclick}
              checked={input.gender === "female"}
               type="radio" name="radio-2" className="mx-2 radio radio-primary bg-white/50" />
            </div>
          </div>
          <p className="text-sm mt-1">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900 font-semibold text-base">
              login
            </Link>
          </p>
          <button
            type="submit"
            className="mt-4 w-full h-10 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 text-white font-semibold shadow-[0_4px_0_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.3)] hover:brightness-110 transition-all duration-150"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
