import React from "react";
import image from "../assets/bgImage.png";
const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="px-10 py-3">
        <img
          src="/simpliby-logo.svg"
          alt="simpliby"
          className="w-[69px] h-[39px]"
        />
        <p className="text-xl font-inter">Simpliby</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
