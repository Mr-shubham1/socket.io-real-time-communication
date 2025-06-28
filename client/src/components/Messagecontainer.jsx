import React from "react";
import Sendinput from "./Sendinput";
import Chatbox from "./Chatbox";
import { useSelector } from "react-redux";

const Messagecontainer = () => {
  const {selecteduser} = useSelector(store=>store.user);
  return (
    <div className="w-[100%] flex flex-col ">
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
        
    </div>
  );
};

export default Messagecontainer;
