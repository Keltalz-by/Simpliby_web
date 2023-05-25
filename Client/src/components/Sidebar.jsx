import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const Links = [
    { link: "/dashboard", name: "home", icon: "" },
    { link: "/messages", name: "messages", icon: "" },
    { link: "/purchase", name: "purchase", icon: "" },
    { link: "/settings", name: "settings", icon: "" },
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
      <div className=" flex flex-col gap-12 items-center pt-5 font-semibold capitalize">
        {Links.map((item, idx) => (
          <Link key={idx} to={item.link} className="text">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
