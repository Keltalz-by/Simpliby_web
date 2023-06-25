import React from "react";

const Card = ({ props }) => {
  const { name, icon, desc, extraStyle } = props;
  return (
    <div
      className={`flex flex-col items-start justify-center gap-5  rounded-2xl p-3 ${extraStyle}`}
    >
      <span className="flex flex-col gap-2">
        <div className="w-10 h-10 ">
          <img src={icon} alt="icon" className="w-full h-full object-contain" />
        </div>
        <h2 className="font-ERegular font-semibold text-xl">{name}</h2>
      </span>
      <p className="font-ERegular text-base text-justify  w-full break-all">
        {desc}
      </p>
    </div>
  );
};

export default Card;
