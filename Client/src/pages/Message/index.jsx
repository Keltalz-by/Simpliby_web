import React from "react";
import ChatList from "./chatList";
import { AiOutlineSearch } from "react-icons/ai";

const Message = () => {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <header className=" h-[20vh] px-10 py-5 mb-5">
        <div className="flex items-center justify-between">
          <h2 className="font-Esemi text-2xl">Messages</h2>
          <div className="w-14 h-14 rounded-full border border-black overflow-hidden">
            <img src="/user.jfif" alt="profile" className="w-full h-full" />
          </div>
        </div>
        <div className="bg-[#dfeffa] rounded-md px-3 py-2 w-[20rem] flex items-center gap-2 text-black font-inter">
          <AiOutlineSearch className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages"
            className="outline-none flex-1 bg-transparent placeholder-[#434041]"
          />
        </div>
      </header>
      <div className="h-[72vh]  overflow-scroll no-scrollbar">
        <ChatList />
      </div>
    </div>
  );
};

export default Message;
