import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className=" p-6 md:w-96 w-80 mx-auto  rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
        <h1 className="text-center text-3xl font-semibold text-white">
          Sign Up
        </h1>
        <form action="">
          <div className="mt-3 flex flex-col gap-1">
            <label className="text-sm font-medium text-black/80 ">
              Full Name
            </label>
            <input
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
              type="password"
              placeholder="Enter Password again"
              className="h-8 px-3 rounded-md bg-white/20  placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-black/80 font-medium"
            />
          </div>
          <div className="mt-3 flex gap-8">
            <div className="flex items-center">
              <p className="text-black/80 text-sm font-medium">Male</p>
              <input type="radio" name="radio-1" className="radio mx-2 mt-1" />
            </div>
            <div className="flex items-center">
              <p className="text-black/80 text-sm font-medium">Female</p>
              <input type="radio" name="radio-1" className="radio mx-2 mt-1" />
            </div>
          </div>
          <p className="text-sm mt-1">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900 font-semibold text-base">
              login
            </Link>
          </p>
          <button type="submit" className="mt-4 w-full h-10 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 text-white font-semibold shadow-[0_4px_0_rgba(0,0,0,0.3)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.3)] hover:brightness-110 transition-all duration-150">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
