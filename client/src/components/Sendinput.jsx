import React from "react";
import { IoSendSharp } from "react-icons/io5";
const Sendinput = () => {
  return (
    <div>
      <form action="">
        <div className="relative">
          <input placeholder="Message" className=" pl-3 text-white font-light placeholder:text-white w-full h-9 rounded-lg bg-gray-700 outline-none " type="text" />
          <div className="absolute top-[5px] right-[10px] text-gray-200 cursor-pointer">
            <IoSendSharp className="h-5 w-5" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sendinput;
