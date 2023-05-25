import React from "react";

const Card = ({ props }) => {
  const { name, icon, desc } = props;
  return (
    <div className="flex flex-col items-start justify-end gap-5 bg-[#CCE7F8] rounded-md p-3">
      <span className="flex flex-col gap-2">
        <div className="w-10 h-10 ">
          <img
            src="/orders.png"
            alt="icon"
            className=" w-full h-full object-contain"
          />
        </div>
        <h2 className="font-ERegular font-semibold">{name}</h2>
      </span>
      <p className="font-ERegular">{desc}</p>
    </div>
  );
};

export default Card;
