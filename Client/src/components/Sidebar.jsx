import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const Navigate = (tab) => {
    setActive(tab);
  };

  const Links = [
    {
      link: "dashboard",
      name: "home",
      icon: <AiFillHome className="w-5 h-5 hover:text-[#00398E]" />,
    },
    {
      link: "messages",
      name: "messages",
      icon: <AiFillMessage className="w-5 h-5 hover:text-[#00398E]" />,
    },
    {
      link: "purchase",
      name: "purchase",
      icon: <HiShoppingCart className="w-5 h-5 hover:text-[#00398E]" />,
    },
    {
      link: "settings",
      name: "settings",
      icon: <IoMdSettings className="w-5 h-5 hover:text-[#00398E]" />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-[18vw] gap-4 font-ERegular h-screen bg-[#dfeffa]">
      <div className="px-10 py-3">
        <img
          src="/simpliby-logo.svg"
          alt="simpliby"
          className="w-[4rem] h-[2rem]"
        />
        <p className="text-base font-semibold">Simpliby</p>
      </div>
      <div
        className={`flex flex-col gap-12 items-start border pt-5 font-semibold capitalize`}
      >
        <div>
          {Links.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              onClick={() => Navigate(item.name)}
              className={`flex items-center gap-5 mb-10 px-10 py-2 rounded-md hover:text-[#00398E] hover:bg-[#64BCF426] ${
                active == item.name ? ` text-[#00398E] bg-[#64BCF426]` : null
              }`}
            >
              {item.icon}
              <p className="text">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
