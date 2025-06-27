import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthuser } from "../redux/userSlice";
const Login = () => {

  const [input,setInput] = useState({
      username:"",
      password:"",
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    function onchangehandler(e){
       setInput({...input,[e.target.name]:e.target.value})
    }
    
  
    async function onsubmithandler(e){
      e.preventDefault();
      // console.log(input);
      try {
        const res = await axios.post("http://localhost:8080/api/v1/user/login",
          input,
          {
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true
          }
        );
        navigate("/");
        // console.log(res);
        dispatch(setAuthuser(res.data));
      } catch (error) {
        console.log("catch error in login onsubmithandler ",error);
        toast.error(error.response.data.message);
      }
      setInput({
      username:"",
      password:"",
      })
    }



  return (
    <div>
      <div className=" p-6 md:w-96 w-80 mx-auto  rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
        <h1 className="text-center text-3xl font-semibold text-white">
          Log In
        </h1>
        <form action="" onSubmit={onsubmithandler}>
          
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80 ">
              Username
            </label>
            <input
              name="username"
              value={input.username}
              onChange={onchangehandler}

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
        
       
          <p className="text-sm mt-3">
            Dont have an account?{" "}    
            <Link to="/signup" className="text-blue-900 font-semibold text-base">
              Signup
            </Link>
          </p>
          <button type="submit" className="mt-1 w-full h-10 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 text-white font-semibold shadow-[0_4px_0_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.3)] hover:brightness-110 transition-all duration-150">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
