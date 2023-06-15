import React from "react";
import { useParams } from "react-router-dom";
import { chats } from "../../utils/data/chatData";
import { IoIosArrowBack, IoMdAttach } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { BiCheckDouble } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import Button from "../../components/button";

const Chat = () => {
  const { id } = useParams();

  return (
    <div className="w-[82vw] h-screen">
      <>
        {chats
          .filter((item) => item.id == id)
          .map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
      </>
      <div className=" flex flex-col items-center gap-6  w-full overflow-hidden">
        <button className="bg-[#D9D9D9] text-[#00398E] font-Esemi w-fit px-7 py-4 rounded-full">
          Payment link
        </button>
        <div className="w-full py-5  px-2 h-[5vh] flex items-center justify-between bg-[#E0E0E0] border">
          <div className=" flex-1 flex items-center gap-3 ">
            <IoMdAttach className="w-5 h-5" />
            <input
              type="text"
              placeholder="Type your message here"
              className="flex-1 outline-none bg-transparent placeholder-[#434041]"
            />
          </div>
          <MdSend className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
const Card = ({ item }) => {
  const { name, image, messageList } = item;
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      <header className="w-full h-[8vh] flex items-center justify-between bg-[#64BCF433] py-2 px-6">
        <div className="flex items-center gap-2">
          <IoIosArrowBack />
          <div className="w-10 h-10 rounded-full border overflow-hidden">
            <img src={image} alt="profile" className="w-full h-full" />
          </div>
          <p className="font-Esemi capitalize">{name}</p>
        </div>
        <SlOptionsVertical />
      </header>
      <div
        className={`flex flex-col p-5 h-[70vh] overflow-scroll no-scrollbar `}
      >
        {messageList.map((item) => (
          <div
            className={`h-auto p-3 my-1
            ${
              item.messageID == "user"
                ? "ml-auto bg-[#64BCF4] rounded-t-xl rounded-bl-xl"
                : "mr-auto  bg-[#D9D9D9]  rounded-t-xl rounded-br-xl"
            }`}
          >
            <span className="font-inter">
              {item.message.map((item) => (
                <p>{item}</p>
              ))}
            </span>
            <div className="flex w-full items-end gap-1 justify-end">
              <p className="text-[10px]">{item.time}</p>
              {item.messageID === "user" && (
                <BiCheckDouble className="w-3 h-3 text-[#3F3B3B]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Chat;
