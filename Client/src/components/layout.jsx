import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="px-10 py-3 ">
          <img
            src="/simpliby-logo.svg"
            alt="simpliby"
            className="w-[69px] h-[39px]"
          />
          <p className="text-xl font-inter">Simpliby</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
